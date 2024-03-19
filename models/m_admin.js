const mongoose = require('mongoose');
const { dbSchema } = require('../common/collection-name')

const adminSchema = new mongoose.Schema({
    role_id: {
        type: String,
        required: true
    },
    admin_name: {
        type: String,
        required: true,
    },
    admin_phone: {
        type: Number,
        required: true
    },
    admin_profile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum: [1, 2],
        default: 1
    },
}, { timestamps: true });

const admin = new mongoose.model(dbSchema.admins, adminSchema);
module.exports = admin