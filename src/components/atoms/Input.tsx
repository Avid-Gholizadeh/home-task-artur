import {
  type UseFormRegister,
  type FieldValues,
  type ValidationRule,
  type Path,
} from "react-hook-form";
import eye from "../../assets/show-pass.svg";
import eyeOff from "../../assets/hide-pass.svg";
import { useState } from "react";

interface InputProps<T extends FieldValues> {
  register?: UseFormRegister<T>;
  name?: Path<T>;
  required?: string | boolean | ValidationRule<boolean>;
  placeholder?: string;
  type?: string;
  className?: string;
  [key: string]: any;
}

const Input = <T extends FieldValues>({
  register,
  name,
  required,
  placeholder,
  type = "text",
  className,
  ...rest
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className={`border-1 border-[#DED2D9] text-[14px] rounded-[5px] h-[45px] w-full p-2 outline-none placeholder:text-gray-400 placeholder:opacity-70 font-['Nunito_Sans'] ${
          className || ""
        }`}
        {...(name && register ? register(name, { required }) : {})}
        {...rest}
      />
      {type === "password" && (
        <img
          onClick={handleShowPassword}
          src={showPassword ? eyeOff : eye}
          alt="Logo"
          className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70"
        />
      )}
    </div>
  );
};

export default Input;
