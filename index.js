//imported modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoute = require('./routes/api');

const app = express();
app.use('/static', express.static(path.join(__dirname, '/public')));
app.use('/api', apiRoute);

app.get('/home', (req, res)=>{
    res.send('hi');
})


//listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})