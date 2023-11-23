import mongoose, { Schema } from "mongoose";

const DishSchema = new mongoose.Schema({
  img: { type: String, require: true },
  name: { type: String, require: true },
  icon: { type: String, require: true },
  ingredients: { type: String, require: true },
  price: { type: Number, require: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurant",
  },
  signatureDish: { type: Boolean, require: true },
});

export const DishModel = mongoose.model("dish", DishSchema);
