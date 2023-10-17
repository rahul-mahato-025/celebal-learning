import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connections } = await mongoose.connect(
      "mongodb://127.0.0.1/celebal-learning"
    );
    // console.log(connections);
    console.log("DB connected");
  } catch (error) {
    console.log("Db conn err");
  }
};
