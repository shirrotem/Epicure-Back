import mongoose, { Schema } from "mongoose";

const ChefSchema = new mongoose.Schema({
  img: { type: String, require: true },
  name: { type: String, require: true },
  about: { type: String, require: true },
  restaurants: [
    {
      type: Schema.Types.ObjectId,
      ref: "restaurant",
    },
  ],
});

export const ChefModel = mongoose.model("chef", ChefSchema);
