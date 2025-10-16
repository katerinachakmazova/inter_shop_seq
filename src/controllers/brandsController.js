const createError = require('http-errors');
// ===============================================
const { Brand } = require('../db/models');
const { Op } = require('sequelize');

class BrandController {
  async getBrands(req, res, next) {
    try {
      const { offset } = req.query;
      const brands = await Brand.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (brands.length > 0) res.json(brands);
      else next(createError(404, 'Brands not found'));
    } catch (error) {
      next(error);
    }
  }
  async getBrandsFromMiddle(req, res, next) {
    try {
      const count = await Brand.count();
      const offset = Math.floor(count / 2);

      const brands = await Brand.findAll({
        order: ['id'],
        offset,
      });
      if (brands.length > 0) res.json(brands);
      else next(createError(404, 'Brands not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralBrands(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(createError(400, 'You must provide brand names in query'));
      }
      const brandNames = names.split(',').map((name) => name.trim());
      const brands = await Brand.findAll({
        where: {
          title: {
            [Op.in]: brandNames,
          },
        },
      });

      if (brands.length > 0) res.json(brands);
      else next(createError(404, 'No brands found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteBrands(req, res, next) {
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

      const deletedCount = await Brand.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
      if (deletedCount > 0) {
        res.json(`${deletedCount} brand(s) deleted successfully.`);
      } else {
        next(createError(404, 'No brands found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateBrands(req, res, next) {
    try {
      const body = req.body;

      const updatedBrand = await Brand.update(body, {
        where: {
          id: body.id,
        },
        returning: '*',
      });
      if (updatedBrand[0] > 0) res.json(...updatedBrand[1]);
      else next(createError(404, 'No brands found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BrandController();
