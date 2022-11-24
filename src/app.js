require("dotenv").config({ path: ".env" });

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/database");
const cors = require("cors");
const ingredientRouter = require("./routes/ingredientRouter");
const recipeRouter = require("./routes/recipeRouter");
const shelfRouter = require("./routes/shelfRouter");
const userRouter = require("./routes/userRouter");
const reviewRouter = require("./routes/reviewRouter");
const authRouter = require("./routes/authRouter");

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hello", async (req, res) => {
  try {
    res.json({ message: "Hello world!" });
    console.log("GET /hello");
  } catch (error) {
    res.status(500).send(error);
  }
});

//Routes
app.use("/ingredient", ingredientRouter);
app.use("/recipe", recipeRouter);
app.use("/shelf", shelfRouter);
app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/auth", authRouter);

// //
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

if (process.env.NODE_ENV === "production") {
  console.log("Starting on production");
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build"))
  );
}

app.listen(PORT, () => {
  console.log(`Listen to ${HOST}:${PORT}`);
});
