require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

try {
    mongoose.connect(process.env.MONGO_ATLAS_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log('Database connected...');
} catch (err) {    
    console.error('Can not establish connection ...');
}

const db = mongoose.connection;

module.exports = db 