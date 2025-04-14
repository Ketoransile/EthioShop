import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { IoHeadsetSharp } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
export const dummyCategories = [
  {
    id: "cat_phones",
    name: "Phones ",
    slug: "phones-tablets",
    filters: ["brand", "storage", "5G", "screen_size"],
    icon: "BsPhone", // From React Icons
    image: IoIosPhonePortrait,
    href: "/?category=smartphone",
  },
  {
    id: "cat_computers",
    name: "Computers",
    slug: "computers-laptops",
    filters: ["ram", "processor", "gpu", "storage_type"],
    icon: "BsLaptop",
    image: RiComputerLine,
    href: "/?category=computer",
  },
  {
    id: "cat_cameras",
    name: "Cameras ",
    slug: "cameras-drones",
    filters: ["sensor_size", "zoom", "video_resolution", "drone_range"],
    icon: "BsCamera",
    image: FaCamera,
    href: "/?category=camera",
  },
  {
    id: "cat_wearables",
    name: "Smartwatches ",
    slug: "smartwatches-wearables",
    filters: ["os", "battery_life", "health_features", "waterproof"],
    icon: "BsSmartwatch",
    image: BsSmartwatch,
    href: "/?category=smartwatch",
  },
  {
    id: "cat_audio",
    name: "Headphones ",
    slug: "headphones-audio",
    filters: ["type", "noise_cancellation", "wireless", "driver_size"],
    icon: "BsHeadphones",
    image: IoHeadsetSharp,
    href: "/?category=headphone",
  },
  {
    id: "cat_gaming",
    name: "Gaming ",
    slug: "gaming-gear",
    filters: ["platform", "refresh_rate", "mechanical_keys", "rgb_lights"],
    icon: "BsJoystick",
    image: IoGameController,
    href: "/?category=gaming",
  },
];
