import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "../forms/Input";
import PasswordInput from "../forms/PasswordInput";

import {
  loginSchema,
  type LoginFormData,
} from "../../schemas/authSchema";

import { useLoginMutation } from "../../services/authApi";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setCredentials } from "../../slices/authSlice";
import { authStorage } from "../../utils/auth";
import { ROUTES } from "../../utils/constants";

function LoginForm() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [login, { isLoading }] =
    useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      const response = await login(data).unwrap();

      dispatch(
        setCredentials({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );

      // localStorage.setItem(
      //   "accessToken",
      //   response.accessToken
      // );

      // localStorage.setItem(
      //   "refreshToken",
      //   response.refreshToken
      // );
      authStorage.setTokens(
        response.accessToken,
        response.refreshToken
      )
      

      toast.success("Login Successful");

      // navigate("/dashboard");
      navigate(ROUTES.DASHBOARD)
    } catch (error: any) {
      toast.error(
        error?.data?.message ??
          "Login Failed"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Input
        label="Username"
        placeholder="Enter username"
        registration={register("username")}
        error={errors.username}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter password"
        registration={register("password")}
        error={errors.password}
      />

      <button
        type="submit"
        disabled={isLoading}
      >
        {isLoading
          ? "Logging in..."
          : "Login"}
      </button>

    </form>
  );
}

export default LoginForm;