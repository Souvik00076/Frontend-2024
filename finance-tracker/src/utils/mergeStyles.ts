import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeStyles = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
