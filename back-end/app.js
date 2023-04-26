const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const songRoutes = require("./controllers/songController.js");

app.use(cors());
app.use(express.json());
app.use(logger("dev"));


app.use("/songs", songRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Tuner");
    }
);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;