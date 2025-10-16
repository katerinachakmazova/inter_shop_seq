const createError = require('http-errors');
// ===============================================
const { Item } = require('../db/models');
const { Op } = require('sequelize');

class ItemController {
  async getItems(req, res, next) {
    try {
      const { offset } = req.query;
      const items = await Item.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (items.length > 0) res.json(items);
      else next(createError(404, 'Items not found'));
    } catch (error) {
      next(error);
    }
  }
  async getItemsFromMiddle(req, res, next) {
    try {
      const count = await Item.count();
      const offset = Math.floor(count / 2);

      const items = await Item.findAll({
        order: ['id'],
        offset,
      });
      if (items.length > 0) res.json(items);
      else next(createError(404, 'Items not found'));
    } catch (error) {
      next(error);
    }
  }

  async deleteItems(req, res, next) {
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

      const deletedCount = await Item.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
      if (deletedCount > 0) {
        res.json(`${deletedCount} item(s) deleted successfully.`);
      } else {
        next(createError(404, 'No items found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateItems(req, res, next) {
    try {
      const body = req.body;

      const updatedItem = await Item.update(body, {
        where: {
          id: body.id,
        },
        returning: '*',
      });
      if (updatedItem[0] > 0) res.json(...updatedItem[1]);
      else next(createError(404, 'No items found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ItemController();
