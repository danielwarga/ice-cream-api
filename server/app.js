const express = require ("express");
const cors = require ("cors");

const data = require ("./data");

// Create an Express app
const app = express();

// Tell the app to listen to JSON bodies on POST requests
app.use(express.json());

// Add 'headers' to each response, saying that we're okay with sharing
app.use(cors());

// Set up a route
app.get("/", (req, res) => {
    res.send("Welcome to the Ice Cream API!");
})

app.get("/flavours", (req, res) => {

    let flavours = data;

    if (req.query.vegan) {
        flavours = flavours.filter(f => f["vegan"])
    }

    res.json({
        flavours: flavours.map(f => f["flavour"])
    })
})

app.get("/flavours/:id", (req, res) => {

    // Extract athe parameter from the 
    const id = req.params.id;

    // Filter the data
    const filteredData = data.filter(f => f["id"] == id);

    if(filteredData.length == 1) {
        res.json({
            flavour: filteredData[0]
        })
    }else {
        res.status(404).json({
            error:"no such ice cream"
        })
    }
})


app.post("/flavours", (req, res) => {
    console.log(req.body);

    const newFlavour = req.body;
    const newId = data.length +1;
    data.push(newFlavour)

    res.status(201).json({
        success: true,
        flavour: newFlavour
    })
})

module.exports = app;
