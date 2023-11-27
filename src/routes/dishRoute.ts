import express from "express";

import {
  getAllDishes,
  createDish,
  deleteDish,
  updateDish,
  getDishByIngredient,
} from "../controllers/dishController";

export default (router: express.Router) => {
  router.get("/dishes", getAllDishes);
  router.get("/dishes/ingredients/:ingredient", getDishByIngredient);
  router.post("/dishes", createDish);
  router.delete("/dishes/:id", deleteDish);
  router.patch("/dishes/:id", updateDish);
};
