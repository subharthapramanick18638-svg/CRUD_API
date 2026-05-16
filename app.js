require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const DbConnection= require('./app/config/DbConfig')
const ApiProductRoutes = require("./app/routes/ApiProductRoutes");
const EjsProductRoutes = require("./app/routes/EjsProductRoutes");

//Dbconnection
DbConnection();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
//static ejs
app.use(express.static("public"));

app.use("/api", ApiProductRoutes);

app.use("/", EjsProductRoutes);





const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
});