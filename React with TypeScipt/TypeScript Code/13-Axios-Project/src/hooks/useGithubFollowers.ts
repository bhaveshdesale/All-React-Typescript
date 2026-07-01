// import { useEffect, useState } from "react"
// import type { FollowersData } from "../types/github";
// import { useParams } from "react-router-dom";
// import { getFollowers } from "../services/gitubService";

import { useQuery } from "@tanstack/react-query"
import { getFollowers } from "../services/gitubService"

// export const useGithubFollowers=()=>{
//      const [followers, setFollowers]=useState<FollowersData[]>([]);
//      const [loading, setLoading]=useState(true);
//      const [error, setError]=useState("");
 
//      const {userName}=useParams();
     
//      useEffect(()=>{
//       const fetchData=async ()=>{
//         try {
//           const result=await getFollowers(userName!);
//           setFollowers(result);
//           console.log(result);
          
//         } catch (error) {

//           setError("Something went wrong while fetching the followers...");
          
//         }
//         finally{
//           setLoading(false);
//         }

//       }
//       fetchData();

//      }, [])
//      return {
//       followers,
//       loading, 
//       error
//      }

// }



export const useGithubFollowers = (username?: string) => {
  return useQuery({
    queryKey: ["github-followers", username],
    queryFn: () => getFollowers(username!),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};