import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
});
export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
