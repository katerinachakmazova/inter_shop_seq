const createError = require('http-errors');
// ===============================================
const { ItemCategory } = require('../db/models');
const { Op } = require('sequelize');

class ItemCategoryController {
  async getItemCategories(req, res, next) {
    try {
      const { offset } = req.query;
      const itemCategories = await ItemCategory.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (itemCategories.length > 0) res.json(itemCategories);
      else next(createError(404, 'Item categories not found'));
    } catch (error) {
      next(error);
    }
  }
  async getItemCategoriesFromMiddle(req, res, next) {
    try {
      const count = await ItemCategory.count();
      const offset = Math.floor(count / 2);

      const itemCategories = await ItemCategory.findAll({
        order: ['id'],
        offset,
      });
      if (itemCategories.length > 0) res.json(itemCategories);
      else next(createError(404, 'Item categories not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralItemCategories(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(createError(400, 'You must provide item category names in query'));
      }
      const itemCategoryNames = names.split(',').map((name) => name.trim());
      const itemCategories = await ItemCategory.findAll({
        where: {
          title: {
            [Op.in]: itemCategoryNames,
          },
        },
      });

      if (itemCategories.length > 0) res.json(itemCategories);
      else next(createError(404, 'No item categories found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteItemCategories(req, res, next) {
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

      const deletedCount = await ItemCategory.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
      if (deletedCount > 0) {
        res.json(`${deletedCount} item category(ies) deleted successfully.`);
      } else {
        next(createError(404, 'No item categories found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateItemCategories(req, res, next) {
    try {
      const body = req.body;

      const updatedItemCategory = await ItemCategory.update(
        body,
        {
          where: {
            id: body.id,
          },
          returning: '*'
        }
      );
      if (updatedItemCategory[0] > 0)
        res.json(...updatedItemCategory[1]);
      else next(createError(404, 'No item categories found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ItemCategoryController();
