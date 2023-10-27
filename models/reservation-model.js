import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "confirmed", "expired"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);
