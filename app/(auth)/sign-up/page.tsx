import Image from "next/image";
// import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import sideImage from "../../../assets/sideImage.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="flex pt-12  gap-32 items-center">
      <Image
        src={sideImage}
        width={500}
        height={500}
        className=""
        alt="sideImage"
      />
      <div className="flex flex-col gap-6 w-1/4 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-sm">Enter your details below</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className=" focus:outline-none border-b border-b-gray-500"
        />
        <input
          type="email"
          placeholder="Email"
          className=" focus:outline-none border-b border-b-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className=" focus:outline-none border-b border-b-gray-500"
        />
        <div className="flex flex-col gap-2">
          {/* <button className="bg-red-500 py-2  text-white rounded-md">
            Create Account
          </button> */}
          <Button className="bg-brandBg cursor-pointer">Create Account</Button>
          <Button variant="outline">
            <div className="flex items-center gap-2 justify-center">
              <FcGoogle size={24} />
              <p>Sign Up with Google</p>
            </div>
          </Button>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="login" className="border-b-2 border-b-gray-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
