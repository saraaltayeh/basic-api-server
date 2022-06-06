"use strict";
const express = require("express");

const { Food } = require("../models/index.js");


const foodRouter = express.Router();

foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.post("/food", createFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

async function getFood(req, res) {
    const allFood = await Food.findAll();
    res.status(200).json(allFood);
}

async function getOneFood(req, res) {
    const foodId = parseInt(req.params.id);
    let food = await Food.findOne({ where: { id: foodId } });
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}

async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let updateFood = req.body;
    
    let foundFood = await Food.findOne({ where: { id:foodId } });
    if (foundClothes) {
        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    } else {
        res.status(404);
    }
}
async function deleteFood(req, res) {
    let foodId = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id: foodId } });

    //   let deleteClothes = await Clothes.destroy({ where: { id } });

    res.status(204).json(deleteFood);
}
module.exports = foodRouter;