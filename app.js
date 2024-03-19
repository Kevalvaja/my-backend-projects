const express = require("express");
const cors = require("cors");
require("./db.js")

const app = express();
app.use(express.json());
app.use(cors());


app.use('/express-practice', require('./express_practice.js'))
app.use('/students', require('./routers/r_students.js'))

app.use('/', require('./routers/index.js'))

app.listen(3000, () => {
    console.log("PORT Running on 3000");
})