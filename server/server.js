const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Senefitret</h2>");
});

app.listen(8080);