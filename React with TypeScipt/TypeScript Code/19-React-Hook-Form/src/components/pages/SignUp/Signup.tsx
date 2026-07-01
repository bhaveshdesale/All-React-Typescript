import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupForms } from "../../../schemas/authSchema";

function Signup() {
  // Use the imported Zod-inferred type 'SignupForms' instead of a manual interface
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForms>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupForms) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name */}
      <input {...register("fullName")} placeholder="Full Name" />
      <p>{errors.fullName?.message}</p>

      {/* Email */}
      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      {/* Password */}
      <input type="password" {...register("password")} placeholder="Password" />
      <p>{errors.password?.message}</p>

      {/* Confirm Password (Added to match your Zod schema) */}
      <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
      <p>{errors.confirmPassword?.message}</p>

      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;


//  Interview Questions- 

// Why use Zod with React Hook Form?
// Answer:
// React Hook Form manages the form state, while Zod centralizes validation in reusable schemas. This keeps components clean and avoids repeating validation logic.

// What does zodResolver() do?
// Answer:
// It acts as a bridge between React Hook Form and Zod, allowing React Hook Form to use a Zod schema for validation.

// Why remove validation from register()?
// Answer:
// To keep validation in one reusable place (the schema), making it easier to maintain and reuse across multiple forms.


// Complete Flow
// User Types

// ↓

// register()

// ↓

// Click Submit

// ↓

// handleSubmit()

// ↓

// zodResolver()

// ↓

// signupSchema

// ↓

// Validation

// ↓

// Valid?

// ↓

// YES

// ↓

// onSubmit(data)

// ────────────

// NO

// ↓

// errors