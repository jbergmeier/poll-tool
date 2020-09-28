const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect('mongodb+srv://db_poll_user:6tFXV5DywcvC@cluster0.rlosr.mongodb.net/poll_dev?retryWrites=true&w=majority&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("successfully connected")
});

module.exports = {db}
