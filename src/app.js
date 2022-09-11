require("dotenv").config({ path: "../project.env" });

const express = require('express');

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.get('/hello', (req, res) => {
    res.json({ message: "Hello world!" });
    console.log("GET /hello")
});

app.listen(PORT, HOST, () => {
    console.log(`Listen to ${HOST}:${PORT}`);
});