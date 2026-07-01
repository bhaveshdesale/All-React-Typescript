import { useQuery } from "@tanstack/react-query"
import { getRandomUser } from "../services/userService"

export const useUser=()=>{
  return useQuery({
  queryKey:["user"],
  queryFn:getRandomUser,
  staleTime: 100*60*5
  })
}