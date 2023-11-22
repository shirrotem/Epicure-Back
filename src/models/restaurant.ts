import mongoose, { Schema } from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  img: { type: String, require: true },
  name: { type: String, require: true },
  chef: { type: Schema.Types.ObjectId, ref: "chef" },
  rating: { type: Number, require: true },
  dishes: [
    {
      type: Schema.Types.ObjectId,
      ref: "dish",
    },
  ],
});

export const RestaurantModel = mongoose.model("restaurant", RestaurantSchema);
