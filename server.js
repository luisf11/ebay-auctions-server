const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
    res.send('hello node')
});


app.listen(3031);
console.log("listening at port 3031");