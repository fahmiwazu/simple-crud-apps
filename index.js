// Load environment variables
require('dotenv').config();

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
const dbName = process.env.SCA_DB_NAME;
const dbPassword = process.env.SCA_DB_PASSWORD ;

// Check if environment variables are loaded
if (!dbName || !dbPassword) {
    console.error("Database credentials not found in environment variables");
    process.exit(1);
}

const mongoURI = `mongodb+srv://${dbName}:${dbPassword}@backenddb.vgtoqfs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });
