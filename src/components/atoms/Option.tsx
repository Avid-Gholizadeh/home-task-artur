import type { OptionHTMLAttributes } from "react";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

export default function Option({ children, ...props }: OptionProps) {
  return (
    <option
      className="text-[14px] rounded-[5px] h-[45px] w-full p-2 outline-none placeholder:text-gray-400 placeholder:opacity-70 font-['Nunito_Sans']"
      {...props}
    >
      {children}
    </option>
  );
}
