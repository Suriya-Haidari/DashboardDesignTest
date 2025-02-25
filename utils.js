// utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge ? twMerge(clsx(...inputs)) : clsx(...inputs);
}
