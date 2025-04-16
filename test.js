// test.js
import * as dotenv from "dotenv";
dotenv.config();

console.log("MONGODB_URL from test.js:", process.env.MONGODB_URL);
console.log("ALL ENV VARS from test.js:", process.env);
