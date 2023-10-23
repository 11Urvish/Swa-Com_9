const app = require('express').Router();

module.exports = (function () {

    //User Route
    var AdminRoutes = require("./admin/router");
    app.use('/admin', AdminRoutes);


    var CustomerRoutes = require("./customer/router");
    app.use('/customer', CustomerRoutes);
    return app;
})();
