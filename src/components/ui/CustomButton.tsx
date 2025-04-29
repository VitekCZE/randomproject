
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "large" | "medium" | "large-white";
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({
  variant = "medium",
  children,
  className,
  color,
  ...props
}) => {
  const baseStyles = "font-semibold transition-all duration-300";

  const variantStyles = {
    large:
      "border-neutral-100 border text-lg tracking-[0.36px] px-8 py-4 border-solid",
    medium:
      "border-neutral-100 border text-sm tracking-[0.28px] leading-[1.1] px-6 py-3",
    "large-white":
      "bg-neutral-100 text-lg tracking-[0.36px] leading-[1.1] px-8 py-4",
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

// Export the buttonVariants object for use in other components
export const buttonVariants = (props?: { variant?: string }) => {
  return "font-semibold transition-all duration-300 px-6 py-3";
};
