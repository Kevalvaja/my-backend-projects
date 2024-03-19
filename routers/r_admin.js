const express = require('express');
const controller = require('../controllers/admin');
const statusCode = require('../common/status-list');
const message = require('../common/message-list');
const jsonResponse = require('../common/json-response');
const admin = express.Router();


admin.get('/', async (req, res) => {
    if (req?.body?.length == undefined) {
        jsonResponse(res, statusCode.conflict, message.MISSING_ALL_BODY_VALUE[req?.headers['accept-language']], null);
        return;
    } else {
        controller.getAdmins(req, res)
    }
})

admin.get('/:id', async (req, res) => {
    console.log(req?.params)
    if (!req?.params?.id) {
        jsonResponse(res, statusCode.conflict, message.MISSING_PARAMETER_VALUE[req?.headers['accept-language']], null);
        return;
    } else {
        controller.getAdmins(req, res)
    }
})

admin.post('/', async (req, res) => {
    if (req?.body?.length == undefined) {
        jsonResponse(res, statusCode.conflict, message.MISSING_ALL_BODY_VALUE["EN"], null);
        return;
    } else {
        controller.getAdmins(req, res)
    }
})

admin.put('/:id', async (req, res) => {
    if (req?.body?.length == undefined) {
        jsonResponse(res, statusCode.conflict, message.MISSING_ALL_BODY_VALUE["EN"], null);
        return;
    } else {
        controller.getAdmins(req, res)
    }
})

admin.delete('/:id', async (req, res) => {
    if (req?.body?.length == undefined) {
        jsonResponse(res, statusCode.conflict, message.MISSING_ALL_BODY_VALUE["EN"], null);
        return;
    } else {
        controller.getAdmins(req, res)
    }
})

module.exports = admin