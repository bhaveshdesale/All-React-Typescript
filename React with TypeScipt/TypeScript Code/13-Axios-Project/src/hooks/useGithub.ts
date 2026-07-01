// import {useEffect, useState,} from "react";
// import { getUsers } from "../services/gitubService";

import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../services/gitubService"

// import {type GitHubProfileData,} from "../types/github";

// export const useGithub =() => {

//  const [ users, setUsers,] = useState< GitHubProfileData[]>([]);

//  const [ loading, setLoading,] = useState(true);

//  const [error,setError,] = useState("");

//  useEffect(() => {

//   const fetchUsers =  async () => {

//     try {

//      const data = await getUsers();
//      setUsers(data);

//     } catch {

//      setError(
//       "Failed to fetch users"
//      );

//     } finally {

//      setLoading(false);

//     }
//    };

//   fetchUsers();

//  }, []);

//  return {
//   users,
//   loading,
//   error,
//  };
// };




export const useGithub = () => {
  return useQuery({
    queryKey: ["github-users"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5,
  });
};