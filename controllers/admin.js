const { dbSchema } = require('../common/collection-name');
const statusCode = require('../common/status-list');

module.exports = {
    getAdmins: (req, res) => {
        // This function is to get admins
        // You can add your logic here
        
        return res.status(statusCode.success).json({ title: "call admin get function" });
    }
};
