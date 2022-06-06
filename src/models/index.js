"use strict";
require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require("sequelize");
const clothes = require("./clothes");

const food = require("./food");


let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            }
        }
        : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes)
};