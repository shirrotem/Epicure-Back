import express from "express";

import { getResultsBySearch } from "../controllers/generalController";

export default (router: express.Router) => {
  router.get("/search", getResultsBySearch);
};
