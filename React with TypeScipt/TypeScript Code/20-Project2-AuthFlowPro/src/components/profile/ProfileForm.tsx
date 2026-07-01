import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Input from "../forms/Input";

import {
  profileSchema,
  type ProfileFormData,
} from "../../schemas/authSchema";

import {
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
} from "../../services/userApi";

function ProfileForm() {
  const { data: user, isLoading } =
    useGetCurrentUserQuery();

  const [
    updateProfile,
    { isLoading: isUpdating },
  ] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
  }, [user, reset]);

  const onSubmit = async (
    data: ProfileFormData
  ) => {
    try {
      if (!user) return;

await updateProfile({
  id: user.id,
  ...data,
}).unwrap();

      toast.success(
        "Profile updated successfully"
      );
    } catch (error: any) {
      toast.error(
        error?.data?.message ??
          "Failed to update profile"
      );
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

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

      <button
        type="submit"
        disabled={isUpdating}
      >
        {isUpdating
          ? "Updating..."
          : "Update Profile"}
      </button>
    </form>
  );
}

export default ProfileForm;









// Profile Opens

// ↓

// GET Current User

// ↓

// RTK Query

// ↓

// Backend

// ↓

// User

// ↓

// reset(user)

// ↓

// React Hook Form

// ↓

// Inputs Filled

// ↓

// User Edits

// ↓

// handleSubmit()

// ↓

// Zod

// ↓

// updateProfile()

// ↓

// Backend

// ↓

// invalidatesTags

// ↓

// Fresh User

// ↓

// UI Updated