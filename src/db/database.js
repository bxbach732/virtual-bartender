require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

try {
    mongoose.connect('mongodb://mongodb:27017/virtual-bar', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        auth: {
            "username": process.env.MONGO_INITDB_ROOT_USERNAME,
            "password": process.env.MONGO_INITDB_ROOT_PASSWORD
        },
        authSource: "admin",
        authMechanism: "DEFAULT"
    });
    console.log('Database connected ...');
} catch (err) {    
    console.error('Can not establish connection ...');
}

const db = mongoose.connection;

module.exports = db 