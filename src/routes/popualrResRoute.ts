import express from "express";
import { getPopularRestaurants } from "../controllers/popularResController";

export default (router: express.Router) => {
  router.get("/getPopularRestaurants", getPopularRestaurants);
};
