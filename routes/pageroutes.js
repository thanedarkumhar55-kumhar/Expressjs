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
// gallary page
router.get('/gallary', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/html/gallary.html"));
});
//contact page
router.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
});
//Project page.
router.get('/project', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/html/project.html"));
});

module.exports=router; 