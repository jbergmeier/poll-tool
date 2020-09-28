const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect('mongodb+srv://',process.env.DB_USER,':',process.env.DB_PASSWORD,'@cluster0.rlosr.mongodb.net/',process.env.DB_DATABASE,'?retryWrites=true&w=majority&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("successfully connected")
});

module.exports = {db}
