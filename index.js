//imported modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoute = require('./routes/api');
const mongoose = require('mongoose');

const app = express();
app.use('/static', express.static(path.join(__dirname, '/public')));
app.use('/api', apiRoute);


//main routes
app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"), "utf-8"); //TODO put in correct address
});





//listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})