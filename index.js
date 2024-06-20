const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./routes/product.route.js');

// Initiate app
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// product routes
app.use("/api/products", productRoute);


// Setup Connection for MonggoDB
mongoose.connect("mongodb+srv://fahmiwiradika:HPwwwWvrutJdUK9S@backenddb.vgtoqfs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });