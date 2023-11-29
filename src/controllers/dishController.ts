import express from "express";
import { DishModel } from "../models/dish";

export const getAllDishes = async (req: express.Request, res: express.Response) => {
  try {
    const dishes = await DishModel.find().populate("restaurant");
    return res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const getDishByIngredient = async (req: express.Request, res: express.Response) => {
  try {
    const { ingredient } = req.params;
    const dishes = await DishModel.find();
    const dishesWithIngredient = dishes.filter((dish) => {
      const ingredients = dish.ingredients.split(",").map((dish) => dish.trim().toLowerCase());
      return ingredients.includes(ingredient.toLowerCase());
    });
    return res.status(200).json(dishesWithIngredient);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const createDish = async (req: express.Request, res: express.Response) => {
  try {
    const { img, name, icon, ingredients, price, restaurant, signatureDish } = req.body;

    if (!img || !name || !icon || !ingredients || !price || !restaurant || signatureDish === "") {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    let signatureDishBool = false;
    if (signatureDish === true || signatureDish === "true") {
      signatureDishBool = true;
    }

    const newDish = new DishModel({
      img,
      name,
      icon,
      ingredients,
      price,
      restaurant,
      signatureDish: signatureDishBool,
    });

    const savedDish = await newDish.save();
    return res.status(201).json(savedDish);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const deleteDish = async (req: express.Request, res: express.Response) => {
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

export const updateDish = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { img, name, icon, ingredients, price, restaurant, signatureDish } = req.body;

    if (!img || !name || !icon || !ingredients || !price || !restaurant || signatureDish === "") {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    let signatureDishBool = false;
    if (signatureDish === true || signatureDish === "true") {
      signatureDishBool = true;
    }

    const dish = await DishModel.findById(id);

    dish.img = img;
    dish.name = name;
    dish.icon = icon;
    dish.ingredients = ingredients;
    dish.price = price;
    dish.restaurant = restaurant;
    dish.signatureDish = signatureDishBool;

    await dish.save();

    return res.status(200).json(dish);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
