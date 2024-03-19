'use strict';

module.exports = (res, status, message, err) => {
    res.status(status).send({status, message, err})
}