"use strict";
const express = require("express");

const { Clothes } = require("../models/index.js");


const clothesRouter = express.Router();

clothesRouter.get("/clothes", getClothes);
clothesRouter.get("/clothes/:id", getOneClothes);
clothesRouter.post("/clothes", createClothes);
clothesRouter.put("/clothes/:id", updateClothes);
clothesRouter.delete("/clothes/:id", deleteClothes);

async function getClothes(req, res) {
    const allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
    const clothesId = parseInt(req.params.id);
    let clothes = await clothes.findOne({ where: { id: clothesId } });
    res.status(200).json(clothes);
}

async function createClothes(req, res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}

async function updateClothes(req, res) {
    let clothesId = parseInt(req.params.id);
    let updateClothes = req.body;
    
    let foundClothes = await Clothes.findOne({ where: { id: clothesId } });
    if (foundClothes) {
        let updatedClothes = await foundClothes.update(updateClothes);
        res.status(201).json(updatedClothes);
    } else {
        res.status(404);
    }
}
async function deleteClothes(req, res) {
    let clothesId = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id: clothesId } });

    //   let deleteClothes = await Clothes.destroy({ where: { id } });

    res.status(204).json(deleteClothes);
}
module.exports = clothesRouter;