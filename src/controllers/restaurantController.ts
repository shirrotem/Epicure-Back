import express from "express";
import { RestaurantModel } from "../models/restaurant";

export const getAllRestaurants = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const restaurant = await RestaurantModel.find();
    return res.status(200).json(restaurant);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { img, name, chef, rating, dishes } = req.body;

    if (!img || !name || !chef || !rating || !dishes) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    const newRestaurant = new RestaurantModel({
      img,
      name,
      chef,
      rating,
      dishes,
    });
    const savedRestaurant = await newRestaurant.save();
    return res.status(201).json(savedRestaurant);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const deleteRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedRestaurant = await RestaurantModel.findOneAndDelete({
      _id: id,
    });

    return res.json(deletedRestaurant);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateRestaurants = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { img, name, chef, rating, dishes } = req.body;

    if (!img || !name || !chef || !rating || !dishes) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const restaurant = await RestaurantModel.findById(id);

    restaurant.img = img;
    restaurant.name = name;
    restaurant.chef = chef;
    restaurant.rating = rating;
    restaurant.dishes = dishes;

    await restaurant.save();

    return res.status(200).json(restaurant).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
