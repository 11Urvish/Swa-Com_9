"use strict";

import commonHelper from "../helpers/common";
import CustomerService from "../services/customer.services";
const { commonResponse } = new commonHelper();
export default class CustomerController {
  common: CustomerService;
  constructor() {
    this.common = new CustomerService();
    this.CreateCustomer = this.CreateCustomer.bind(this);
    this.Login = this.Login.bind(this);
    this.GetCustomer = this.GetCustomer.bind(this);
    this.GetCustomerById = this.GetCustomerById.bind(this);
    this.UpdateCustomer = this.UpdateCustomer.bind(this);
    this.DeleteCustomer = this.DeleteCustomer.bind(this);
    this.AddFile = this.AddFile.bind(this)
  }

  AddFile(req, res) {
    this.common.AddFile(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }

  CreateCustomer(req, res) {
    this.common.CreateCustomer(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }

  GetCustomer(req, res) {
    this.common.GetCustomer(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }

  GetCustomerById(req, res) {
    this.common.GetCustomerById(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }

  UpdateCustomer(req, res) {
    this.common.UpdateCustomer(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }

  DeleteCustomer(req, res) {
    this.common.DeleteCustomer(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }
  Login(req, res) {
    this.common.Login(req, async (error, result) => {
      await commonResponse(res, error, result);
    });
  }
}
