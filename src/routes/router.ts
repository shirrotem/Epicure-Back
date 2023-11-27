import express from "express";
import restaurants from "./restaurantRoute";
import dishes from "./dishRoute";
import chefs from "./chefRoute";
import chefOfTheWeek from "./chefOfTheWeekRoute";
import popualrRes from "./popualrResRoute";
import signatureDish from "./signatureDishRoute";
import general from "./generalRoute";
const router = express.Router();

export default (): express.Router => {
  general(router);
  restaurants(router);
  dishes(router);
  chefs(router);
  chefOfTheWeek(router);
  popualrRes(router);
  signatureDish(router);
  return router;
};
