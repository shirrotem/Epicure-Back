import express from "express";
import { getChefOfTheWeek } from "../controllers/chefOfTheWeekControllers";

export default (router: express.Router) => {
  router.get("/getChefOfTheWeek", getChefOfTheWeek);
};
