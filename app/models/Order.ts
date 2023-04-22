import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    line_items: [{ type: Object }],
    name: { type: String },
    email: { type: String },
    city: { type: String },
    postalCode: { type: String },
    address: { type: String },
    country: { type: String },
    paid: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export default models.Order || model("Order", OrderSchema);
