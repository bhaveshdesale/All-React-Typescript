import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;

  type?: string;

  placeholder?: string;

  registration: UseFormRegisterReturn;

  error?: FieldError;
}

function Input({
  label,
  type = "text",
  placeholder,
  registration,
  error,
}: InputProps) {
  return (
    <div>
      <label>{label}</label>

      <input type={type} placeholder={placeholder} {...registration} />

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Input;




// The Most Important Line
// <input

// {...registration}

// />

// Let's expand it.

// Suppose

// registration

// contains

// {
//     name:"email",

//     onChange:fn,

//     onBlur:fn,

//     ref:ref
// }

// This

// <input

// {...registration}

// />

// becomes

// <input

// name="email"

// onChange={fn}

// onBlur={fn}

// ref={ref}

// />

// This is the exact moment

// the input becomes connected

// to React Hook Form.

// Without this line,

// React Hook Form cannot track the field.





// Complete Flow

// User types email
//         │
//         ▼
// <input>
//         │
//         ▼
// onChange (from registration)
//         │
//         ▼
// React Hook Form updates state
//         │
//         ▼
// User clicks Submit
//         │
//         ▼
// handleSubmit()
//         │
//         ▼
// zodResolver()
//         │
//         ▼
// signupSchema
//         │
//         ▼
// Validation Success / Failure
//         │
//         ▼
// errors.email
//         │
//         ▼
// <Input error={errors.email} />
//         │
//         ▼
// <p>{error.message}</p>