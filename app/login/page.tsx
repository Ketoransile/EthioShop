import { FcGoogle } from "react-icons/fc";
import sideImage from "../../assets/sideImage.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function LoginPage() {
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
          <h1 className="text-2xl font-bold">
            Login to Ethio<span className="text-blue-600">shop</span>
          </h1>
          <p className="text-sm">Enter your details below</p>
        </div>

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
            Login
          </button> */}
          <Button className="bg-brandBg cursor-pointer">Login</Button>
        </div>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link href="sign-up" className="border-b-2 border-b-gray-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
