const mongoose = require("mongoose");
const express = require('express');
const app = express();
require("dotenv").config();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI)
        .then(
            () => { console.log("Connection to MongoDB established")},
            err => { console.log("Failed to connect to MongoDB", err)}
        );

const product = require('./routes/product.routes');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/products', product);
app.use('/', express.static('./'));

app.listen(port, () => {
    console.log("Server is up");
});        
