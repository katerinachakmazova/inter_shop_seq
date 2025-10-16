const createError = require('http-errors');
// ===============================================
const { Models } = require('../db/models');
const { Op } = require('sequelize');

class ModelController {
  async getModels(req, res, next) {
    try {
      const { offset } = req.query;
      const models = await Models.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (models.length > 0) res.json(models);
      else next(createError(404, 'Models not found'));
    } catch (error) {
      next(error);
    }
  }
  async getModelsFromMiddle(req, res, next) {
    try {
      const count = await Models.count();
      const offset = Math.floor(count / 2);

      const models = await Models.findAll({
        order: ['id'],
        offset,
      });
      if (models.length > 0) res.json(models);
      else next(createError(404, 'Models not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralModels(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(createError(400, 'You must provide model names in query'));
      }
      const modelNames = names.split(',').map((name) => name.trim());
      const models = await Models.findAll({
        where: {
          title: {
            [Op.in]: modelNames,
          },
        },
      });

      if (models.length > 0) res.json(models);
      else next(createError(404, 'No models found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteModels(req, res, next) {
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

      const deletedCount = await Models.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
      if (deletedCount > 0) {
        res.json(`${deletedCount} model(s) deleted successfully.`);
      } else {
        next(createError(404, 'No models found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateModels(req, res, next) {
    try {
      const body = req.body;

      const updatedModel = await Models.update(
        body,
        {
          where: {
            id: body.id,
          },
          returning: '*'
        }
      );
      if (updatedModel[0] > 0)
        res.json(...updatedModel[1]);
      else next(createError(404, 'No models found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ModelController();
