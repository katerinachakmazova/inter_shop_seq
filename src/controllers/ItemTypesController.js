const createError = require('http-errors');
// ===============================================
const { ItemType } = require('../db/models');
const { Op } = require('sequelize');

class ItemTypeController {
  async getItemTypes(req, res, next) {
    try {
      const { offset } = req.query;
      const itemTypes = await ItemType.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (itemTypes.length > 0) res.json(itemTypes);
      else next(createError(404, 'Item types not found'));
    } catch (error) {
      next(error);
    }
  }
  async getItemTypesFromMiddle(req, res, next) {
    try {
      const count = await ItemType.count();
      const offset = Math.floor(count / 2);

      const itemTypes = await ItemType.findAll({
        order: ['id'],
        offset,
      });
      if (itemTypes.length > 0) res.json(itemTypes);
      else next(createError(404, 'Item types not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralItemTypes(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(
          createError(400, 'You must provide item type names in query')
        );
      }
      const itemTypeNames = names.split(',').map((name) => name.trim());
      const itemTypes = await ItemType.findAll({
        where: {
          title: {
            [Op.in]: itemTypeNames,
          },
        },
      });

      if (itemTypes.length > 0) res.json(itemTypes);
      else next(createError(404, 'No item types found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteItemTypes(req, res, next) {
    try {
      let { id } = req.query;

      if (!id) {
        return next(createError(400, 'Provide one or more IDs to delete'));
      }
      const ids = id
        .split(',')
        .map((id) => {
          const n = Number(id);
          if (isNaN(n)) return null;
          return n;
        })
        .filter((id) => id !== null);

      if (ids.length === 0) {
        return next(createError(400, 'No valid IDs provided'));
      }

      const deletedCount = await ItemType.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
      if (deletedCount > 0) {
        res.json(`${deletedCount} item type(s) deleted successfully.`);
      } else {
        next(createError(404, 'No item types found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateItemTypes(req, res, next) {
    try {
      const body = req.body;

      const updatedItemType = await ItemType.update(body, {
        where: {
          id: body.id,
        },
        returning: '*',
      });
      if (updatedItemType[0] > 0) res.json(...updatedItemType[1]);
      else next(createError(404, 'No item types found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ItemTypeController();
