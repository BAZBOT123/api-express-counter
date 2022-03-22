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
app.post('/counter/increment', (req, res) => {
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
    counter = 0
    res.json({ counter: counter })
})

// All endpoints should return the current value of the counter in following format: `{ counter: 0 }`

app.get('/count', (req, res) => {
    res.json({ count: counter })
})

// ## Extension 1
// Add a route PUT `/counter` that can be used to set the counter to a specific value. 
// The value should be specified by a query string parameter. For example, making a 
// PUT request to `/counter?value=20` should set the value of the counter to 20. 
// Use the  `req.query` property in your callback to get the value provided. 
// See the [express documentation](https://expressjs.com/en/api.html#req.query) If no value is provided, 
// the counter should not be changed. 
app.put('/counter', (req, res) => {
    res.send({ counter: req.query.value })
})

// ## Extension 2
// Using [route parameters](https://expressjs.com/en/guide/routing.html),  
// update your API to keep track of multiple counters. 
// Allow the client to specify the counter name as part of the URL. 
// For example, to update and access a counter called "cars", 
// the client could make the following requests:

// - POST `/counter/cars/increment`
// - POST `/counter/cars/decrement`
// - POST `/counter/cars/double`
// - DELETE `/counter/cars`
// - GET `/counter/cars`

// It should be possible for the client to specify any counter name in the place of "cars".
app.get('/counter/cars/:one', (req, res) => {
    console.log(req.route)
    console.log("Hello", req.params.one)
    res.send({counter: req.params.one})
})

//Start up our server
const port = 3030
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
})