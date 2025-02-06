import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGO_CONNECT_STRING;

if (!MONGODB_URI) {
  throw new Error("❌ MongoDB connection string is missing in .env.local");
}

let cached = global.mongoose || { conn: null, promise: null };
async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
