const express = require('express');
const testSchema = require('../models/testModel');

const router = express.Router();


router.get('/acquire', async(req, res)=>{
    let docs = await testSchema.find();
    console.log(docs);
    res.send(docs);
})

router.get('/add', async(req, res)=>{
    const newThing = new testSchema({
        number: 69
    })
    newThing.save();
    res.send('done');
})

module.exports = router;