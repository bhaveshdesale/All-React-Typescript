import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../services/gitubService";

export const useRepositories = (username?: string) => {
  return useQuery({
    queryKey: ["github-repositories", username],
    queryFn: () => getRepositories(username!),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};