import { Link, useParams } from "react-router-dom";
import { useGithubUser } from "../../hooks/useGithubUser";

export default function UserProfilePage() {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError, error } = useGithubUser(username);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error instanceof Error ? error.message : "Something went wrong"}</h1>;
  if (!data) return null;

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} width={150} />
      <h1>{data.name ?? data.login}</h1>
      <p>@{data.login}</p>
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
      <p>Public Repos: {data.public_repos}</p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link to={`/users/${data.login}/followers`}>Followers</Link>
        <Link to={`/users/${data.login}/following`}>Following</Link>
        <Link to={`/users/${data.login}/repos`}>Repositories</Link>
        <a href={data.html_url} target="_blank" rel="noreferrer">
          GitHub Profile
        </a>
      </div>
    </div>
  );
}