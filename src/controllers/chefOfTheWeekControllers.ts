import express from "express";
import { ChefModel } from "../models/chef";

export const getChefOfTheWeek = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const chefOfTheWeek = await ChefModel.find({
      chefOfTheWeek: true,
    });
    return res.status(200).json(chefOfTheWeek);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
