import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  label,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-opacity-90",
    secondary:
      "bg-[var(--secondary)] text-[var(--primary)] hover:bg-opacity-90",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
