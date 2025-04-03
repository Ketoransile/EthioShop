import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectDB as client } from "./db";

async function getDbInstance() {
  const db = await client();
  return db;
}
export const auth = betterAuth({
  database: mongodbAdapter(await getDbInstance()),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
