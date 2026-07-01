import axios from "axios";
import type { User } from "../type/user";

export const getUsers=async ():Promise<User[]>=>{
  const response=await axios.get("https://reqres.in/api/users?page=1");

  return response.data.data;

}