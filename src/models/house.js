import { Schema, model } from "mongoose";

const houseSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    zip_code: {
      type: String,
      required: false,
    },
    rooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const HouseModel = model("House", houseSchema);
