const createError = require('http-errors');
// ===============================================
const { Store } = require('../db/models');
const { Op } = require('sequelize');

class StoreController {
  async getStores(req, res, next) {
    try {
      const { offset } = req.query;
      const stores = await Store.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (stores.length > 0) res.json(stores);
      else next(createError(404, 'Stores not found'));
    } catch (error) {
      next(error);
    }
  }
  async getStoresFromMiddle(req, res, next) {
    try {
      const count = await Store.count();
      const offset = Math.floor(count / 2);

      const сustomers = await Store.findAll({
        order: ['id'],
        offset,
      });
      if (сustomers.length > 0) res.json(сustomers);
      else next(createError(404, 'Stores not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralStores(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(createError(400, 'You must provide stores names in query'));
      }
      const storesNames = names.split(',').map((name) => name.trim());
      const stores = await Store.findAll({
        where: {
          title: {
            [Op.in]: storesNames,
          },
        },
      });
      if (stores.length > 0) res.json(stores);
      else next(createError(404, 'No stores found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteStores(req, res, next) {
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

      const deletedCount = await Store.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });

      if (deletedCount > 0) {
        res.json(`${deletedCount} store(s) deleted successfully.`);
      } else {
        next(createError(404, 'No stores found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateStores(req, res, next) {
    try {
      const body = req.body;

      const updatedStore = await Store.update(body, {
        where: {
          id: body.id,
        },
        returning: '*',
      });
      if (updatedStore[0] > 0) res.json(...updatedStore[1]);
      else next(createError(404, 'No stores found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StoreController();
