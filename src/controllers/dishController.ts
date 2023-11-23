import express from "express";
import { DishModel } from "../models/dish";

export const getAllDishes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const dishes = await DishModel.find();
    return res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const createDish = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { img, name, icon, ingredients, price, restaurant } = req.body;

    if (!img || !name || !icon || !ingredients || !price || !restaurant) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newDish = new DishModel({
      img,
      name,
      icon,
      ingredients,
      price,
      restaurant,
    });

    const savedDish = await newDish.save();
    return res.status(201).json(savedDish);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const deleteDish = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedDish = await DishModel.findOneAndDelete({
      _id: id,
    });

    return res.json(deletedDish);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const updateDish = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { img, name, icon, ingredients, price, restaurant } = req.body;

    if (!img || !name || !icon || !ingredients || !price || !restaurant) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const dish = await DishModel.findById(id);

    dish.img = img;
    dish.name = name;
    dish.icon = icon;
    dish.ingredients = ingredients;
    dish.price = price;
    dish.restaurant = restaurant;

    await dish.save();

    return res.status(200).json(dish);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
