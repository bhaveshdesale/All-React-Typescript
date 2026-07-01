import { useParams } from "react-router-dom";
import { useRepositories } from "../../hooks/useRepositary";
import RepositaryCardList from "../gitHub/repositaries/RepositaryCardList";

export default function RepositaryPage() {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError, error } = useRepositories(username);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error instanceof Error ? error.message : "Something went wrong"}</h1>;

  return <RepositaryCardList data={data ?? []} />;
}