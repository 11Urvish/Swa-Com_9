"use strict";

var express = require('express');
var router = express.Router();

require('./customer')(router);

module.exports = router;
