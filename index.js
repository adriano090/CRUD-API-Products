const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/products", productRoute);


app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

app.get('/', (req, res) => {
    res.send("Hello from Node API New!")
});


mongoose.connect("mongodb+srv://louisjulienndjem:7DFBGNr211jk43m6@backenddb.ud1qlcp.mongodb.net/FreeCodeCampAPI?retryWrites=true&w=majority&appName=BackEndDB")
.then(() => {
    console.log("Connecté à la base de données BackEndDB");
})
.catch(() => {
    console.log("Connection échouée");
});