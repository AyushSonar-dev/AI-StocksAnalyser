import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { ConnectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;
  const mongoose = await ConnectToDatabase();
  const db = mongoose.connection.db;
  if (!db) throw new Error("Database connection not established");

  authInstance = betterAuth({
    database: mongodbAdapter(db as any),
    secret: process.env.BETTER_AUTH_SECRET ,
    emailAndPassword:{
      enabled:true,
      minPasswordLength:8,
      maxPasswordLength:128,
      autoSignIn:true,
      disableSignUp:false,
    },
    plugins: [nextCookies()],
    
  });

  return authInstance;

};

export const auth = await getAuth();