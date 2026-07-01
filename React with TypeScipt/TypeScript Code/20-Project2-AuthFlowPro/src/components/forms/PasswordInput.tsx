import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

function PasswordInput({
  label,
  placeholder,
  registration,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label>{label}</label>

      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...registration}
        />

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default PasswordInput;
