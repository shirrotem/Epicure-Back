import express from "express";
import { ChefModel } from "../models/chef";

export const getAllChefs = async (req: express.Request, res: express.Response) => {
  try {
    const chefs = await ChefModel.find().populate("restaurants");
    return res.status(200).json(chefs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createChef = async (req: express.Request, res: express.Response) => {
  try {
    const { img, name, about, restaurants, chefOfTheWeek } = req.body;

    if (!img || !name || !about || !restaurants || chefOfTheWeek === "") {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    let chefOfTheWeekBool = false;
    if (chefOfTheWeek === true || chefOfTheWeek === "true") {
      chefOfTheWeekBool = true;
    }

    const newChef = new ChefModel({
      img,
      name,
      about,
      restaurants,
      chefOfTheWeek: chefOfTheWeekBool,
    });

    const savedChef = await newChef.save();
    return res.status(201).json(savedChef);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteChef = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedChef = await ChefModel.findOneAndDelete({
      _id: id,
    });

    return res.json(deletedChef);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateChef = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { img, name, about, restaurants, chefOfTheWeek } = req.body;

    if (!img || !name || !about || !restaurants || chefOfTheWeek === "") {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const chef = await ChefModel.findById(id);

    if (!chef) {
      return res.status(404).json({ message: "Chef not found" });
    }
    let chefOfTheWeekBool = false;
    if (chefOfTheWeek === true || chefOfTheWeek === "true") {
      chefOfTheWeekBool = true;
    }

    chef.img = img;
    chef.name = name;
    chef.about = about;
    chef.restaurants = restaurants;
    chef.chefOfTheWeek = chefOfTheWeekBool;
    await chef.save();

    return res.status(200).json(chef);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
