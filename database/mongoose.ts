import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let Cached = global.mongooseCache;

if (!Cached) {
  Cached = global.mongooseCache = { conn: null, promise: null };
}

export const ConnectToDatabase = async () => {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }
  if (Cached.conn) {
    return Cached.conn;
  }

  if (!Cached.promise) {
    Cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false });
  }
  try {
    Cached.conn = await Cached.promise;
  } catch (e) {
    Cached.promise = null;
    throw e;
  }
  console.log(`MongoDB connected ${process.env.NODE_ENV}- ${MONGO_URI}`);
};
