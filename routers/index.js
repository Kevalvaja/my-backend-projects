const express = require('express');

const routes = express();

routes.use('/admin', require('../routers/r_admin'))

module.exports = routes