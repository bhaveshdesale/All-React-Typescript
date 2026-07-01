import type { RepositoryData } from "../../../types/github";

interface RepositaryCardItemProps {
  repos: RepositoryData;
}

function RepositaryCardItem({ repos }: RepositaryCardItemProps) {
  return (
    <div>
      <h2>Name: {repos.name}</h2>
      <a href={repos.html_url} target="_blank" rel="noreferrer">
        Repo: {repos.html_url}
      </a>
      <h4>Description: {repos.description ?? "null"}</h4>
      <h4>Language: {repos.language ?? "Unknown"}</h4>
      <h4>Stars: {repos.stargazers_count}</h4>
      <h4>Fork Count: {repos.forks_count}</h4>
    </div>
  );
}

export default RepositaryCardItem;