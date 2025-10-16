const createError = require('http-errors');
// ===============================================
const { Order } = require('../db/models');
const { Op } = require('sequelize');

class OrderController {
  async getOrders(req, res, next) {
    try {
      const { offset } = req.query;
      const orders = await Order.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (orders.length > 0) res.json(orders);
      else next(createError(404, 'Orders not found'));
    } catch (error) {
      next(error);
    }
  }
  async getOrdersFromMiddle(req, res, next) {
    try {
      const count = await Order.count();
      const offset = Math.floor(count / 2);

      const orders = await Order.findAll({
        order: ['id'],
        offset,
      });
      if (orders.length > 0) res.json(orders);
      else next(createError(404, 'Orders not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralOrders(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(createError(400, 'You must provide order names in query'));
      }
      const orderNames = names.split(',').map((name) => name.trim());
      const orders = await Order.findAll({
        where: {
          code: {
            [Op.in]: orderNames,
          },
        },
      });

      if (orders.length > 0) res.json(orders);
      else next(createError(404, 'No orders found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteOrders(req, res, next) {
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

      const deletedCount = await Order.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
      if (deletedCount > 0) {
        res.json(`${deletedCount} order(s) deleted successfully.`);
      } else {
        next(createError(404, 'No orders found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateOrders(req, res, next) {
    try {
      const body = req.body;

      const updatedOrder = await Order.update(
        body,
        {
          where: {
            id: body.id,
          },
          returning: '*'
        }
      );
      if (updatedOrder[0] > 0)
        res.json(...updatedOrder[1]);
      else next(createError(404, 'No orders found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
