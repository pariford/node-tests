const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.status(400);
    res.send({
        error: "Page not Found"
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: "Paritosh Bapat",
        age: 25
    }, {
        name: "Anurag Kumawat",
        age: 25
    }, {
        name: "Abhishek Bhardwaj",
        age: 25
    }]);
})

app.listen(3000);

module.exports.app = app;