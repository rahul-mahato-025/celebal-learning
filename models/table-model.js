import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    capacity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "availaible",
      enum: ["availaible", "reserved"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Table", TableSchema);
