const express = require('express');
const path =require('path');

const router=express.Router(); 

// Home page.
router.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, "../public/html/home.html"))  //add path.join ()
});
//About page
router.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/html/about.html"));
});

module.exports=router; 