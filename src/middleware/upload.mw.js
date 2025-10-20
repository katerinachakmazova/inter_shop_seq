const path = require('path');
// ===========================
const multer = require('multer');
// ===========================
const {staticPath} = require('../config/staticConfig')

const storageBrandLogo = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(staticPath, 'images', 'brands'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname)
  }
})

const filterBrandLogo = (req, file, cb) => {
  const MimeTypeRegExp = /^image\/(jpeg|png|gif)$/;
  if(MimeTypeRegExp.test(file.mimetype)){
    return cb(null, true)
  }
  return cb(null, false)
};

module.exports.uploadImages = multer({
  storage: storageBrandLogo, 
  fileFilter: filterBrandLogo,
})