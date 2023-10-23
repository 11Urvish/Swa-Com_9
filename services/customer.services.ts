"use strict";
const models = require("./../models/index");
import commonHelper from "../helpers/common";
import { HttpCodes } from "../helpers/responseCodes";
import { Sequelize } from "sequelize";
import bcrypt from "bcrypt";
const { getEpoch, CreateJwt, ComparePassword } = new commonHelper();
const db = require("../models/index");
const Op = db.Sequelize.Op;

export default class CustomerService {
  constructor() {
    this.CreateCustomer = this.CreateCustomer.bind(this);
    this.GetCustomer = this.GetCustomer.bind(this);
    this.GetCustomerById = this.GetCustomerById.bind(this);
    this.UpdateCustomer = this.UpdateCustomer.bind(this);
    this.DeleteCustomer = this.DeleteCustomer.bind(this);
    this.Login = this.Login.bind(this);
  }

  async AddFile(req, callback) {
    const file = req.file.filename;
    const { fullName, email, phoneNo, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      let createCustomer = await models.Customer.build({
        fullName,
        file,
        email,
        phoneNo,
        password: hashedPassword,
        iCreatedAt: await getEpoch(),
      });
      await createCustomer.save();
      return callback(null, {
        status: HttpCodes["API_SUCCESS"],
        msg: "CreateUser",
        code: HttpCodes["CREATED"],
        data: {},
      });
    } catch (error) {
      console.log(error, "error.....");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "ApiFailed",
        code: HttpCodes["BAD_REQUEST"],
        data: error,
      });
    }
  }

  async CreateCustomer(req, callback) {
    const { fullName, email, phoneNo, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      let createCustomer = await models.Customer.build({
        fullName,
        email,
        phoneNo,
        password: hashedPassword,
        iCreatedAt: await getEpoch(),
      });
      await createCustomer.save();
      return callback(null, {
        status: HttpCodes["API_SUCCESS"],
        msg: "CreateUser",
        code: HttpCodes["CREATED"],
        data: {},
      });
    } catch (error) {
      console.log(error, "error.....");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "ApiFailed",
        code: HttpCodes["BAD_REQUEST"],
        data: error,
      });
    }
  }

  async GetCustomer(req, callback) {
    try {
      const customerData = await models.Customer.findAll();
      if (customerData.length > 0) {
        return callback(null, {
          status: HttpCodes["API_SUCCESS"],
          msg: "GetCandidate",
          code: HttpCodes["OK"],
          data: customerData,
        });
      } else {
        return callback(null, {
          status: HttpCodes["API_FAILURE"],
          msg: "ContentNotFound",
          code: HttpCodes["CONTENT_NOT_FOUND"],
          data: {},
        });
      }
    } catch (error) {
      console.log(error, "error.....");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "ApiFailed",
        code: HttpCodes["BAD_REQUEST"],
        data: error,
      });
    }
  }

  async GetCustomerById(req, callback) {
    const { id } = req.params;
    try {
      const customerData = await models.Customer.findAll({ where: { id } });
      if (customerData.length > 0) {
        return callback(null, {
          status: HttpCodes["API_SUCCESS"],
          msg: "GetCandidate",
          code: HttpCodes["OK"],
          data: customerData,
        });
      } else {
        return callback(null, {
          status: HttpCodes["API_FAILURE"],
          msg: "ContentNotFound",
          code: HttpCodes["CONTENT_NOT_FOUND"],
          data: {},
        });
      }
    } catch (error) {
      console.log(error, "error.....");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "ApiFailed",
        code: HttpCodes["BAD_REQUEST"],
        data: error,
      });
    }
  }

  async UpdateCustomer(req, callback) {
    const { fullName, phoneNo, file } = req.body;
    const { id } = req.params;
    try {
      const updateCustomerData = await models.Customer.update(
        {
          fullName,
          file,
          phoneNo,
          iUpdatedAt: await getEpoch(),
        },
        { where: { id } }
      );
      if (updateCustomerData[0] === 1) {
        return callback(null, {
          status: HttpCodes["API_SUCCESS"],
          msg: "UpdateUser",
          code: HttpCodes["OK"],
          data: {},
        });
      } else {
        return callback(null, {
          status: HttpCodes["API_FAILURE"],
          msg: "UpdateUserFailed",
          code: HttpCodes["NOT_FOUND"],
          data: {},
        });
      }
    } catch (error) {
      console.log(error, "error.....");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "ApiFailed",
        code: HttpCodes["BAD_REQUEST"],
        data: error,
      });
    }
  }

  async DeleteCustomer(req, callback) {
    const { id } = req.params;
    try {
      const deleteCustomer = await models.Customer.destroy({ where: { id } });
      if (deleteCustomer) {
        return callback(null, {
          status: HttpCodes["API_SUCCESS"],
          msg: "DeleteCustomer",
          code: HttpCodes["OK"],
          data: {},
        });
      } else {
        return callback(null, {
          status: HttpCodes["API_FAILURE"],
          msg: "DeleteCustomerFailed",
          code: HttpCodes["NOT_FOUND"],
          data: {},
        });
      }
    } catch (error) {
      console.log(error, "error.....");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "ApiFailed",
        code: HttpCodes["BAD_REQUEST"],
        data: error,
      });
    }
  }


  async Login(req, callback) {
    const { email, password } = req.body;
    try {
      let customer = await models.Customer.findOne({ where: { email } });
      if (!customer) {
        return callback(null, {
          status: HttpCodes["API_FAILURE"],
          msg: "LoginInvalidValue",
          code: HttpCodes["UNAUTHORIZED"]
        });
      }
      const Cpassword = await ComparePassword(password, customer.password);
      if (!Cpassword) {
        return callback(null, {
          status: HttpCodes["API_FAILURE"],
          msg: "LoginInvalidValue",
          code: HttpCodes["UNAUTHORIZED"],
        });
      }

      let cId = { id: customer.id };

      console.log(cId);
      const token = await CreateJwt(cId);
      console.log(token);
      // let cLogin = await models.customerLogins.build({
      //         id: customer.id,
      //         accessToken: token,
      //         iCreatedAt: await getEpoch(),
      //       });
      //       await cLogin.save();
        return callback(null, {
          status: HttpCodes["API_SUCCESS"],
          msg: "Login",
          code: HttpCodes["OK"],
          data: { Token: token },
        });
      
    } catch (error) {
      console.log(error.message, "Login");
      return callback(null, {
        status: HttpCodes["API_FAILURE"],
        msg: "LoginFailed",
        code: HttpCodes["BAD_REQUEST"],
      });
    }
  }

//   async Login(req, callback) {
//     const {  email, password  } = req.body;
//     try {
//       let customer = await models.Customer.findOne({ where: { email } });
//       if (!customer) {
//         return callback(null, {
//           status: HttpCodes["API_FAILURE"],
//           msg: "LoginInvalidValue",
//           code: HttpCodes["UNAUTHORIZED"]
//         });
//       }
//   const Vpassword = await ComparePassword(password, customer.password);
//   if (!Vpassword) {
//     return callback(null, {
//       status: HttpCodes["API_FAILURE"],
//       msg: "LoginInvalidValue",
//       code: HttpCodes["UNAUTHORIZED"],
//     });
//   }

//   let cId = { id: customer.id };

//   console.log(cId);
//   const token = await CreateJwt(cId);
//   console.log(token);
//   // let userLogin = await models.UserLogin.build({
//   //         iUserId: customer.iUserId,
//   //         vAccessToken: token,
//   //         iCreatedAt: await getEpoch(),
//   //       });
//   //       await userLogin.save();
//     return callback(null, {
//       status: HttpCodes["API_SUCCESS"],
//       msg: "Login",
//       code: HttpCodes["OK"],
//       data: { Token: token },
//     });
  
// } catch (error) {
//   console.log(error.message, "Login");
//   return callback(null, {
//     status: HttpCodes["API_FAILURE"],
//     msg: "LoginFailed",
//     code: HttpCodes["BAD_REQUEST"],
//   });
// }
// }
}

