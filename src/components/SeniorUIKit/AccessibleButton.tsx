import React from "react";
import { cn } from "@/lib/utils";

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AccessibleButton = ({ children, className, ...props }: AccessibleButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "min-h-[48px] text-lg px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
        className
      )}
    >
      {children}
    </button>
  );
};