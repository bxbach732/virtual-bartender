require("dotenv").config({ path: "../project.env" });

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/database");
const ingredientRouter = require("./routes/ingredientRouter");
const recipeRouter = require("./routes/recipeRouter");

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', async (req, res) => {
    try{
        res.json({ message: "Hello world!" });
        console.log("GET /hello")
    } catch (error) {
        res.status(500).send(error);
    }
});

//Routes
app.use("/ingredient", ingredientRouter);
app.use("/recipe", recipeRouter);

app.listen(PORT, HOST, () => {
    console.log(`Listen to ${HOST}:${PORT}`);
});