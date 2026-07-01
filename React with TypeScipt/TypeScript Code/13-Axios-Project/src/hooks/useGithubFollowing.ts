import { useQuery } from "@tanstack/react-query";
import { getFollowing } from "../services/gitubService";

export const useGithubFollowing = (username?: string) => {
  return useQuery({
    queryKey: ["github-following", username],
    queryFn: () => getFollowing(username!),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};