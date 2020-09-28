const mongoose = require("mongoose")
require("dotenv").config()
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_db = process.env.DB_DATABASE

mongoose.connect(`mongodb+srv://${db_user}:${db_password}@cluster0.rlosr.mongodb.net/${db_db}?retryWrites=true&w=majority&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("successfully connected")
});

module.exports = {db}
