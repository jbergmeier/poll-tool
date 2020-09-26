const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { system } = require("faker")
const bodyParser = require("body-parser")
require("dotenv").config

const app = express()
const port = 1337 || process.env.PORT

// Middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

// Routes
app.get("/", async(req, res, next) => {
    try {
        res.status(200).json('message: ok')
    }
    catch(err) {
        next(err)
    }
})

app.post("/new-poll", async(req, res, next) => {
    console.log(req.body)
    try {
        res.status(200).json('message: ok')
    }
    catch(err) {
        next(err)
    }
})
// Error Handler
app.use((err, req, res, next) => {
    console.error('StackTrace: ' + err.stack);
  
    res.status(500).json({
      message: 'An error has occured!',
      stack: process.env.NODE_ENV == 'development' ? err.stack : 'n/a',
    });
  });

// Start Server
app.listen(port, () => {
    console.log("Server is running on Port: ", port)
})