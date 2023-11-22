import express from "express";
import { DishModel } from "../models/dish";

const getAllDishes = async (req: express.Request, res: express.Response) => {
  try {
    const dishes = await DishModel.find();
    return res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const createDish = async (req: express.Request, res: express.Response) => {
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

const deleteDish = async (req: express.Request, res: express.Response) => {
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

const updateDish = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const dish = await DishModel.findById(id);

    dish.name = name;
    await dish.save();

    return res.status(200).json(dish);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export default (router: express.Router) => {
  router.get("/dishes", getAllDishes);
  router.post("/dishes", createDish);
  router.delete("/dishes/:id", deleteDish);
  router.patch("/dishes/:id", updateDish);
};
