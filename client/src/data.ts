import { Facebook, Instagram, Telegram, Twitter, YouTube } from "@mui/icons-material";

export const menu = [
  { title: "All Movies", href: "/all" },
  { title: "By Genres", href: "/genres" },
  { title: "Random Movie", href: null },
];

export const profileMenu = [
  { title: "General", href: "/profile" },
  { title: "Notifications", href: "/notifications" },
];

export const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: YouTube, href: "#" },
  { icon: Telegram, href: "#" },
];

export const genres = [
  "Comedy",
  "Romance",
  "Fantasy",
  "Adventure",
  "Action",
  "Magic",
  "School Life"
];

export const notificationOptions = ["Email Notifications", "Reviews", "News"];
