import React, { FC, FormEvent } from "react";

interface PasswordInputBoxProps {
  placeholder: string;
  handleChange: (e: FormEvent) => void;
}

const PasswordInput: FC<PasswordInputBoxProps> = ({
  placeholder,
  handleChange,
}) => {
  return (
    <input
      className="text-darkGrey border-solid border-2 border-secondary pt-5 pb-5 pl-8 mb-5 w-850 focus:outline-none focus:border-primary lg:w-600 md:w-80 tb:w-96 tb:h-8 tb:pl-4 tb:text-sm m:w-64 m:h-8 m:text-xs m:pl-4 "
      type="password"
      required
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default PasswordInput;
