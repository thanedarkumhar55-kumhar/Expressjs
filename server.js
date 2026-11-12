// core modules
const express = require('express');
const path=require('path');
// local modules
const router=require("./routes/pageroutes.js");

// serve app
const app=express(); 

// joining all paths and server html files.
app.use(express.static(path.join(__dirname, "public")));

// routing home all pages
app.use('/', router)

//Listing server.
app.listen(3000, (req, res)=>{
    console.log("The server is running on http://localhost:3000");
});