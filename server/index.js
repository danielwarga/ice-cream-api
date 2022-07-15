// Immport the app
const app = require("./app.js")

// Start the server
const port = 3000;

app.listen(port, () => {
    console.log(`Started lidtening on port ${port}`)
})

