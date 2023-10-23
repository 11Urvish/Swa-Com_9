
import { body } from 'express-validator';
const models = require('./../../models/index');
const { Op } = require("sequelize");


module.exports.CreateCustomer =[
  body('fullName').trim().notEmpty().withMessage('CustomerfullNameRequired'),
  body('fullName').trim().isLength({min:2}).withMessage('CustomerfullNameMinLengthRequired'),
  body('fullName').trim().isLength({max:15}).withMessage('CustomerfullNameMaxLengthRequired'),
  body('phoneNo').trim().notEmpty().withMessage('CustomerphoneNoRequired'),
  body('phoneNo').trim().isLength({min:10}).withMessage('CustomerphoneNoMinLengthRequired'),
  body('phoneNo').trim().isLength({max:15}).withMessage('CustomerphoneNoMaxLengthRequired'),
  body('Email').trim().notEmpty().withMessage('CustomerEmailRequired'),
  body('Email').trim().isEmail().withMessage('ValidEmailFormat'),
  body('Email').trim().custom(async (value, { req }) => {
    return new Promise<void>((resolve, reject) => {
      return models.Customer.findOne({
        where:{
          Email: {[Op.eq]: value},
          bIsDeleted:false
        }
      }).then(user => {
        if (user && user !== null && user !== undefined) {
          return reject();
        } else {
          return resolve();
        }
      }).catch((err) => {
        return reject();
      });
    });
  }).withMessage('ExistCustomer')
];

