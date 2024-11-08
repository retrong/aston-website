// components/Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "font-semibold rounded focus:outline-none transition transform"; // Added transform
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-white hover:text-black",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline:
      "bg-white hover:bg-primary text-black hover:text-white",
  };
  const sizeStyles = {
    small: "px-3 py-3 text-sm",
    medium: "px-4 py-3 text-base",
    large: "px-5 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1 hover:shadow-md"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
