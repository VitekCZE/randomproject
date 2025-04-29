import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "large" | "medium" | "large-white";
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "medium",
  children,
  className,
  color,
  ...props
}) => {
  const baseStyles = "font-semibold";

  const variantStyles = {
    large:
      "border-neutral-100 border gap-2.5 text-lg tracking-[0.36px] px-10 py-5 border-solid max-md:px-5",
    medium:
      "gap-4 text-sm tracking-[0.28px] leading-[1.1] px-8 py-4 max-md:px-5",
    "large-white":
      "bg-neutral-100 gap-2.5 text-lg tracking-[0.36px] leading-[1.1] px-10 py-5 max-md:px-5",
  };

  const colorStyle = color ? { color } : {};

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      style={colorStyle}
      {...props}
    >
      {children}
    </button>
  );
};
