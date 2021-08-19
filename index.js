//imported modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoute = require('./server/routes/api');
const mongoose = require('mongoose');

const app = express();
app.use('/static', express.static(path.join(__dirname, '/client/public')));
app.use('/api', apiRoute);


//main routes
app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"), "utf-8"); //TODO put in correct address
});


const uri = "mongodb+srv://testboy:testboy@rest.tmyts.mongodb.net/ht6test?retryWrites=true&w=majority";
mongoose.connect(uri, 
{ useUnifiedTopology: true , useNewUrlParser: true }, ()=>{
  console.log("Connected to DB");
})


//listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})