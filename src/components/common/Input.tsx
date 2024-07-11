import { InputText } from "primereact/inputtext";
import React from "react";

const Input = React.forwardRef(({ label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-column gap-2">
      <label htmlFor="username" className="font-semibold">
        {label}
      </label>
      <InputText
        className="w-25rem"
        placeholder="Please enter email"
        {...rest}
      />
    </div>
  );
});

type InputProps = {
  label: string;
};

export default Input;
