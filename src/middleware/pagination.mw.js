const { PAGINATION_SCHEMA } = require('../utils/validationSchemas');

module.exports.paginate = async (req, res, next) => {
  const { offset } = req.query;
  const defaultPagination = {
    offset: 0,
  };
  const pagination = {
    offset,
  };
  try {
    if (await PAGINATION_SCHEMA.isValid(pagination)) {
      req.pagination = pagination;
    } else {
      req.pagination = defaultPagination;
    }
    next();
  } catch (error) {
    next(error.message);
  }
};
