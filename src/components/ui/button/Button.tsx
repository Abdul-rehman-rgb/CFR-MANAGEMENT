import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-[#5D5FEF] border-[1px] text-white shadow-theme-xs hover:bg-white hover:border-[#5D5FEF] hover:text-[#5D5FEF] disabled:bg-brand-300",
    secondary:
      "bg-white border-[1px] text-[#5D5FEF] border-indigo-500 shadow-theme-xs hover:bg-[#5D5FEF] hover:border-[#5D5FEF] hover:text-white disabled:bg-brand-300",    
    
      outline:
      "bg-white border-[1px] text-[#5D5FEF] ring-1 ring-inset ring-gray-300 hover:bg-[#5D5FEF] dark:bg-[#0D0D0D] dark:text-[#A9A9CD] dark:hover:bg-white dark:hover:text-[#5D5FEF] dark:hover:border-[#5D5FEF] dark:hover:border-[1px] dark:ring-gray-700/50 dark:hover:ring-gray-700/50",
  };

  return (
    <button type="submit"
      className={`inline-flex font-medium items-center justify-center gap-2 rounded-lg transition ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
