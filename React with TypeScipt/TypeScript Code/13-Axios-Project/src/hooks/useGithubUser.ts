// import { useEffect, useState } from "react"
// import type { GithubUserData } from "../types/github"
// import { useParams } from "react-router-dom";
// import { getProfile } from "../services/gitubService";

import { useQuery } from "@tanstack/react-query"
import { getProfile, } from "../services/gitubService"
import { useParams } from "react-router-dom"

// export const useGithubUser=()=>{

//   const [user, setUser]=useState<GithubUserData>({} as GithubUserData);
//   const [loading,setLoading]=useState(true);
//   const [error, setError]=useState("");

//    const { username } =
//     useParams();

//   useEffect(()=>{
//     const fetchUserData=async ()=>{
//       try {
//           const result=await getProfile(username!);
//           setUser(result);  
        
//       } catch {
//         setError("Something went wrong")
//       }
//       finally{
//         setLoading(false);
//       }


//     }
//     fetchUserData();
//   }, [username])
//   return {
//     user,
//     loading,
//     error
//   }
// }


export const useGithubUser = (username?: string) => {
  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () => getProfile(username!),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};