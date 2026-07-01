import { useParams } from "react-router-dom";
import { useGithubFollowers } from "../../hooks/useGithubFollowers";
import FollowersCardList from "../gitHub/followers/FollowersCardList";

export default function FollowersPage() {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError, error } = useGithubFollowers(username);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error instanceof Error ? error.message : "Something went wrong"}</h1>;

  return <FollowersCardList followersData={data ?? []} />;
}