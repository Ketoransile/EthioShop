import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MyAccountPage() {
  return (
    <div className="flex flex-col gap-6 pt-20">
      <h1 className="text-brandBg font-bold text-xl">Edit Your Profile</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="first-name" className="text-sm font-semibold">
            First Name
          </Label>
          <Input
            id="first-name"
            type="text"
            placeholder="First Name"
            className="w-80"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="last-name" className="text-sm font-semibold">
            Last Name
          </Label>
          <Input
            id="last-name"
            type="text"
            placeholder="Last Name"
            className="w-80"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-semibold">
            Email
          </Label>
          <Input id="email" placeholder="Email" className="w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="address" className="text-sm font-semibold">
            Address
          </Label>
          <Input
            id="address"
            placeholder="Addis Ababa, Wello Sefer, Ethiopia"
            className="w-80"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-sm font-semibold">Password Changes</h1>
        <Input type="text" placeholder="Current Password" />
        <Input type="text" placeholder="New Password" />
        <Input type="text" placeholder="Confirm Password" />
      </div>
      <div className="flex gap-4 self-end">
        <Button className="bg-white text-black border-gray-600">Cancel</Button>
        <Button className="bg-brandBg text-white px-4 py-2 rounded-md">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
