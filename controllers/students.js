const studentModel = require('../models/m_students');

module.exports = {
    getData: async (req, res) => {

    },

    getByIdData: async (req, res) => {

    },

    studentCreated: async (req, res) => {
        try {
            const newStudent = req?.body
            const studentData = new studentModel(newStudent)
            await studentData.save();
            return res.json("inserted successfully")
        } catch (error) {
            console.log(error)
        }
    },

    studentUpdated: async (req, res) => {

    },

    studentDeleted: async (req, res) => {

    },
}