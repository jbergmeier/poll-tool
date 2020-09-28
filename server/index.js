const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { system } = require("faker")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
require('dotenv').config()

// Import supporting functions
const {makeid} = require("./js/functions")

// Import DB conneciton and schema
const {db} = require("./db/connection")
const {pollSchema} = require("./db/schema")
const Poll = mongoose.model('Poll', pollSchema);

const app = express()
const port = 1337 || process.env.PORT

// Middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

// Testing
// let test = new Poll({
//     question: "Hello23"
// })
// test.save((err, poll) => {
//     console.log(poll.id)
// })


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
    try {
        const getPollCode = makeid(10)
        
        // Get input from POST request and map through it + build new Array with additional information for DB save
        let pollAnswers = req.body.answers.map((answer) => {
            return {id: answer.id, answerOption: answer.answer, votes: 0}
        })
        console.log(pollAnswers)

        // Create entry in DB
        let registerNewPoll = new Poll({
            code: getPollCode,
            question: req.body.question,
            answers: pollAnswers,
            hidden: false,
            active: true,
            lastChange: Date.now()
        })
        registerNewPoll.save((err, poll) => {
            console.log(poll.id)
        })

        // Send output to POST request
        res.status(200).json({
            id: registerNewPoll.id, //DB ID
            code: getPollCode,
            question: req.body.question,
            answers: pollAnswers,
            hidden: false, // TODO: make var
            active: true, // TODO: make var
            status: 'created' // DB Status: created / failed
        }

        )
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


