import express from "express";
import restaurants from "./restaurantRoute";
import dishes from "./dishRoute";
import chefs from "./chefRoute";

const router = express.Router();

export default (): express.Router => {
  restaurants(router);
  dishes(router);
  chefs(router);
  return router;
};
