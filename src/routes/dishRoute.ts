import express from "express";

import {
  getAllDishes,
  createDish,
  deleteDish,
  updateDish,
} from "controllers/dishController";

export default (router: express.Router) => {
  router.get("/dishes", getAllDishes);
  router.post("/dishes", createDish);
  router.delete("/dishes/:id", deleteDish);
  router.patch("/dishes/:id", updateDish);
};
