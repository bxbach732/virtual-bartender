const mongoose = require("mongoose");

try {
    mongoose.connect('mongodb://mongodb:27017/virtual-bar', {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    console.log('Database connected ...');
} catch (err) {    
    console.error('Can not establish connection ...');
}

const db = mongoose.connection;

module.exports = db 