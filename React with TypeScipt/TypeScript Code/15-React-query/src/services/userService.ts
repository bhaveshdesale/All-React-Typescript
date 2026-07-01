import { api } from "../api/axios"
export const getRandomUser=async()=>{
   const response=await api.get("/api");
   return response.data;
  
}