import express from "express";
import { RestaurantModel } from "../models/restaurant";

export const getPopularRestaurants = async (req: express.Request, res: express.Response) => {
  try {
    const popularRestaurants = await RestaurantModel.find({
      popularRestaurant: true,
    }).populate("chef");
    return res.status(200).json(popularRestaurants);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
