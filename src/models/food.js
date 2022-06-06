"use strict";

const Food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
        },
    });

module.exports = Food;