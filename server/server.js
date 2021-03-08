const express = require('express');
const path = require('path'); 
let app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next()
})

app.listen(3000);