import express from "express";

import {
  getAllRestaurants,
  createRestaurant,
  deleteRestaurant,
  updateRestaurants,
} from "controllers/restaurantController";

export default (router: express.Router) => {
  router.get("/restaurants", getAllRestaurants);
  router.post("/restaurants", createRestaurant);
  router.delete("/restaurants/:id", deleteRestaurant);
  router.patch("/restaurants/:id", updateRestaurants);
};
