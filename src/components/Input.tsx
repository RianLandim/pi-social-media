import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { register, formState } = useFormContext();

  const isValid = formState.errors[props.name]?.message;

  return (
    <div>
      <input
        className={
          !isValid
            ? "focus:border-[#0081BC] border-2 transition-colors ease-out"
            : " border-red-600 border-2"
        }
        {...register(props.name)}
        {...props}
      />
      {isValid && typeof isValid === "string" && (
        <span className="block text-start text-sm text-red-600">{isValid}</span>
      )}
    </div>
  );
}
