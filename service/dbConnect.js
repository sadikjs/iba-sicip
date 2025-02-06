import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_CONNECT_STRING);
    console.log("db connection successfully");
    return con;
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnect;
