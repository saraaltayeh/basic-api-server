"use strict";

const Clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
        },
    });

module.exports = Clothes;