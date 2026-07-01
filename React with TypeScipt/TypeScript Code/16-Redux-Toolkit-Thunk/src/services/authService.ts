import axios from "axios";
import type { LoginPayload, LoginRespose } from "../type/auth";

export const login=async (credentials:LoginPayload):Promise<LoginRespose>=>{
  const response=await axios.post("https://reqres.in/api/login", credentials)
return response.data;

}