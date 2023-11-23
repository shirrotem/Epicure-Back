import express from "express";
import { getSignatureDish } from "../controllers/signatureDishControllers";

export default (router: express.Router) => {
  router.get("/getSignatureDish", getSignatureDish);
};
