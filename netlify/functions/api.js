const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "html", "index.html")
    );
});

// About route
app.get("/about", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "html", "about.html")
    );
});

// Contact route
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "contact.html");
});

// Export the serverless handler
module.exports.handler = serverless(app);




