const express = require('express');

const port = 8080;
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Senefitret</h2>");
});

app.listen(port, () => {
    console.log(`Senefitret app listening at port ${port}`);
});