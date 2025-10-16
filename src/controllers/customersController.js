const createError = require('http-errors');
// ===============================================
const { Customer } = require('../db/models');
const { Op } = require('sequelize');

class CustomerController {
  async getCustomers(req, res, next) {
    try {
      const { offset } = req.query;
      const customers = await Customer.findAll({
        limit: 10,
        offset,
        order: ['id'],
      });
      if (customers.length > 0) res.json(customers);
      else next(createError(404, 'Customers not found'));
    } catch (error) {
      next(error);
    }
  }
  async getCustomersFromMiddle(req, res, next) {
    try {
      const count = await Customer.count();
      const offset = Math.floor(count / 2);

      const сustomers = await Customer.findAll({
        order: ['id'],
        offset,
      });
      if (сustomers.length > 0) res.json(сustomers);
      else next(createError(404, 'Customers not found'));
    } catch (error) {
      next(error);
    }
  }

  async getSeveralCustomers(req, res, next) {
    try {
      const { names } = req.query;
      if (!names) {
        return next(
          createError(400, 'You must provide customers names in query')
        );
      }
      const customerNames = names.split(',').map((name) => name.trim());
      const customers = await Customer.findAll({
        where: {
          full_name: {
            [Op.in]: customerNames,
          },
        },
      });
      if (customers.length > 0) res.json(customers);
      else next(createError(404, 'No customers found for given names'));
    } catch (error) {
      next(error);
    }
  }
  async deleteCustomers(req, res, next) {
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

      const deletedCount = await Customer.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });

      if (deletedCount > 0) {
        res.json(`${deletedCount} customer(s) deleted successfully.`);
      } else {
        next(createError(404, 'No customers found with given IDs'));
      }
    } catch (error) {
      next(error);
    }
  }

  async updateCustomers(req, res, next) {
    try {
      const body = req.body;

      const updatedCustomer = await Customer.update(body, {
        where: {
          id: body.id,
        },
        returning: '*',
      });
      if (updatedCustomer[0] > 0) res.json(...updatedCustomer[1]);
      else next(createError(404, 'No customers found with given id'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CustomerController();
