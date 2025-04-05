import type React from "react";
interface IconBoxProps {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function IconBox({ icon, size = "md" }: IconBoxProps) {
  const sizeClasses = {
    sm: "p-1.5 sm:p-2",
    md: "p-1.5 sm:p-2",
    lg: "p-2 sm:p-3",
  };

  return (
    <div
      className={`bg-green-100 ${sizeClasses[size]} rounded-full flex-shrink-0`}
    >
      {icon}
    </div>
  );
}
