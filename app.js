const express = require("express");
const cors = require("cors");
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
require("./db.js")

const app = express();
app.use(express.json());
app.use(cors());

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'My API Description',
    },
};

const options = {
    swaggerDefinition,
    apis: ['./common/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/express-practice', require('./express_practice.js'))
app.use('/students', require('./routers/r_students.js'))

app.use('/', require('./routers/index.js'))

app.listen(3000, () => {
    console.log("PORT Running on 3000");
})