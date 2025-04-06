import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const signUpEmail = async (data) => {
  const { email, password, name } = data;

  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  redirect("/");
};
