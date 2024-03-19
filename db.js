const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://mongodb:UzK28R465E1pxHli@cluster0.fl3oxpm.mongodb.net/`).then((data) => {
    console.log('Database Connected Succesfully....');
}).catch((err) => {
    console.log(err)
})