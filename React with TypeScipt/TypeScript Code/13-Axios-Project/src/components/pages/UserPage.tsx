import { useGithub } from "../../hooks/useGithub";
import GitHubCardList from "../gitHub/GitHubCardList";

export default function UserPage() {
  const { data, isLoading, isError, error } = useGithub();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error instanceof Error ? error.message : "Something went wrong"}</h1>;

  return <GitHubCardList data={data} />;
}