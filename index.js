//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())

let counter = 0

// GET `/counter` - Returns the current value of the counter. The counter should start of at 0.
app.get('/counter', (req, res) => {
    console.log('got the counter', counter)
    res.json({ counter: counter })
})

// POST `/counter/increment`-  Increments the counter on the server and returns the current value.
app.get(`/counter/increment`, (req, res) => {
    counter++
    res.json({ counter: counter })
})

// POST `/counter/decrement`-  Decrements a counter on the server and returns the current value.
app.post('/counter/decrement', (req, res) => {
    counter--
    res.json({ counter: counter })
})

// POST `/counter/double`-  Double the value of the counter on the server and returns the current value. 
app.post('/counter/double', (req, res) => {
    counter = counter * 2
    res.json({ counter: counter })
})

// DELETE `/counter` - Resets the counter to 0 and returns the current value.
app.delete('/counter', (req, res) => {
    res.json({ counter: counter })
})

// All endpoints should return the current value of the counter in following format: `{ counter: 0 }`

app.get('/count', (req, res) => {
    res.json({ count: counter })
})

//Start up our server
const port = 3030
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
})