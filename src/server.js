"use strict"; // to use javascript in strict mode
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const clothesRoutes = require("./routes/clothes");
const foodRoutes = require("./routes/food");


app.use(express.json());

app.use(clothesRoutes);
app.use(foodRoutes);

app.use("*", notFoundHandler);

app.use(errorHandler);

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};