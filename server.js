
"use strict";
// import {express} from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const {getEbay,parseEbay} = require('./scrapper/index');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const data = [];


const getData = (item) => {
    getEbay(item)
    .then(parseEbay)
    .then(items => items.map(x => data.push(x) ))
	// .then(items => items.map(Object.values).forEach(console.log))
    .catch(e => console.log(e));
};

app.post('/item', (req, res) => {
    console.log(req.body);
    
    let item = req.body.item;
    console.log(item)
    getData(item);
    setTimeout(() =>  res.send(data),1000 * 3);
});


app.listen(3031);
console.log("listening at port 3031");