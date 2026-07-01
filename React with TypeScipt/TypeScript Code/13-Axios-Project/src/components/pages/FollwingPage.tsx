import { useParams } from "react-router-dom";
import { useGithubFollowing } from "../../hooks/useGithubFollowing";
import FollowingCardList from "../gitHub/following/FollowingCardList";

export default function FollwingPage() {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError, error } = useGithubFollowing(username);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error instanceof Error ? error.message : "Something went wrong"}</h1>;

  return <FollowingCardList data={data ?? []} />;
}