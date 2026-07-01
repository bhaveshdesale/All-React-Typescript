import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "../forms/Input";
import PasswordInput from "../forms/PasswordInput";

import { signupSchema, type SignupFormData } from "../../schemas/authSchema";

import { useSignupMutation } from "../../services/authApi";

function SignupForm() {
  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignupMutation();

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }).unwrap();

      toast.success("Account created successfully");

      navigate("/login");
    } catch (error: any) {
      toast.error(error?.data?.message ?? "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="First Name"
        placeholder="Enter first name"
        registration={register("firstName")}
        error={errors.firstName}
      />

      <Input
        label="Last Name"
        placeholder="Enter last name"
        registration={register("lastName")}
        error={errors.lastName}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        registration={register("email")}
        error={errors.email}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter password"
        registration={register("password")}
        error={errors.password}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        registration={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating Account..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignupForm;

// Tool 1
// register

// Purpose?

// Connect Input

// to RHF.

// Nothing else.

// Tool 2
// handleSubmit

// Purpose?

// Validate

// ↓

// Then call

// onSubmit()

// Never call

// onSubmit

// directly.

// Always

// handleSubmit(onSubmit)

// because RHF needs to validate first.

// Complete Flow

// User fills form

// ↓

// Click Submit

// ↓

// handleSubmit()

// ↓

// Zod Validation

// ↓

// Valid?

//         │

//    No   │   Yes

//    ↓    │

// errors  │

//         ↓

// onSubmit(data)

// ↓

// signup()

// ↓

// Backend

// ↓

// unwrap()

// ↓

// Success ?

//       │

//  No   │   Yes

//  ↓    │

// catch │

//  ↓    │

// Toast │

//       ↓

// Success Toast

// ↓

// Navigate("/login")
