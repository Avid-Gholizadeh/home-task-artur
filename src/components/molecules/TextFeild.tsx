import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
  ValidationRule,
} from "react-hook-form";
import Input from "../atoms/Input";

interface TextFeildProps<T extends FieldValues> {
  label: string;
  register?: UseFormRegister<T>;
  name?: Path<T>;
  required?: string | boolean | ValidationRule<boolean>;
  errors?: FieldErrors<T>;
  placeholder?: string;
  type?: string;
}

const TextFeild = <T extends FieldValues>({
  label,
  register,
  name,
  required,
  errors,
  placeholder,
  type,
}: TextFeildProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-['Nunito_Sans'] font-semibold flex justify-between text-[#828282]">
        {label}
        {errors && name && errors[name] && (
          <span className="text-red-500 text-sm ">
            {errors[name]?.message as string}
          </span>
        )}
      </span>
      <Input
        register={register}
        name={name}
        required={required}
        placeholder={placeholder || ""}
        type={type}
      />
    </div>
  );
};

export default TextFeild;
