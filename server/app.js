const express = require ("express");

// Create an Express app
const app = express();

// Set up a route
app.get("/", (req, res) => {
    res.send("Welcome to the Ice Cream API!");
})

// ACtually start the server ------move this to app.js to test them separately
// app.listen(3000, () => {
//     console.log("Started lidtening on port 3000")
// })

module.exports = app;
