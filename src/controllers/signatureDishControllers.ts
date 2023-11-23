import express from "express";
import { DishModel } from "../models/dish";

export const getSignatureDish = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const signatureDish = await DishModel.find({
      signatureDish: true,
    });
    return res.status(200).json(signatureDish);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
