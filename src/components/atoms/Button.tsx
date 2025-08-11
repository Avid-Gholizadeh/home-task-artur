interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`bg-[#7F265B] cursor-pointer text-white px-4 py-2 rounded-[6px] hover:bg-[#6A1F4B] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
