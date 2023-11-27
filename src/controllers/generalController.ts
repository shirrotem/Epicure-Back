import express from "express";
import { DishModel } from "../models/dish";
import { RestaurantModel } from "../models/restaurant";
import { ChefModel } from "../models/chef";

export const getResultsBySearch = async (req: express.Request, res: express.Response) => {
  try {
    const { searchTerm } = req.body;

    if (!searchTerm) {
      return res.status(400).json({ message: "Please provide a search term" });
    }
    const restaurants = await RestaurantModel.find();
    const filteredRestaurants = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const dishes = await DishModel.find();
    const filteredDishes = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const chefs = await ChefModel.find();
    const filteredChefs = chefs.filter((chef) =>
      chef.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredResults = [...filteredChefs, ...filteredDishes, ...filteredRestaurants];
    return res.status(200).json(filteredResults);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
