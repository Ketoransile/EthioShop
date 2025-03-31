import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-32">
      <h1 className="text-7xl font-bold">404 Not Found</h1>
      <p className="text-sm">
        Your visited page not found. You may go home page.
      </p>
      <Link href="/" className="">
        <Button className="bg-red-500 py-2 lg:w-md cursor-pointer hover:bg-red-400 text-white rounded-md">
          Back to home page
        </Button>
      </Link>
    </div>
  );
}
