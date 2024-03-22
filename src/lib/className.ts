import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function className(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default className
