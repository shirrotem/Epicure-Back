import express from "express";

import { searchByInput } from "../controllers/generalController";

export default (router: express.Router) => {
  router.post("/search", searchByInput);
};
