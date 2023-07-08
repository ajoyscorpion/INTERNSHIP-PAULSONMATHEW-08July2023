// import 
// config: Loads .env file contents into process.env
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import db
require("./db/connection")

// import router
const router = require('./routes/router')

//create express server
const server = express()

// setup the port number for server
const PORT = 3000 || process.env.PORT

//use cors, json parser in server app
server.use(cors())
server.use(express.json())
server.use(router)

// to resolve http request using express server
server.get('/',(req,res)=>{
    res.send("Internship Server Started Hey All")
})

// run the server app in a specified port
server.listen(PORT,()=>{
    console.log(`Internship Server started at port number ${PORT}`);
})