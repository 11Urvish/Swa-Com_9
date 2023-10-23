const path = require('path')
import CustomerController from "../../controllers/customer.controller";
import commonHelper from "../../helpers/common";
//import * as CustomerValidation from '../../helpers/validation/customer.validation';
const { CreateCustomer, GetCustomer, GetCustomerById, UpdateCustomer, DeleteCustomer ,Login,AddFile} = new CustomerController();

const { verifyToken,CheckValidationError} = new commonHelper();
const  uploadFile = require('../../helpers/validation/Intercepter');
const CustomerValidation = require('../../helpers/validation/customer.validation')

module.exports = function (router) {
    //router.post('/v1/create-customer',CheckValidationError,CustomerValidation,CreateCustomer);
    router.post('/v1/create-customer',CheckValidationError,CreateCustomer);
    router.get('/v1/get-customer',verifyToken, GetCustomer);
    router.get('/v1/get-customer/:id',verifyToken, GetCustomerById);
    router.patch('/v1/update-customer/:id', UpdateCustomer);
    router.patch('/v1/delete-customer/:id', DeleteCustomer);
    
    router.post('/v1/login-customer', Login);
    router.post('/v1/AddFile',uploadFile.single('file'),AddFile);
}
