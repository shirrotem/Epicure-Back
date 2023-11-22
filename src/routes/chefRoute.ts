import express from "express";

import {
  getAllChefs,
  createChef,
  deleteChef,
  updateChef,
} from "../controllers/chefController";

export default (router: express.Router) => {
  router.get("/chefs", getAllChefs);
  router.post("/chefs", createChef);
  router.delete("/chefs/:id", deleteChef);
  router.patch("/chefs/:id", updateChef);
};
