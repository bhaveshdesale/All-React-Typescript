import GitHubCardItem from "./GitHubCardItem";
import type { GitHubProfileData } from "../../types/github";

interface GitHubCardListProps {
  data?: GitHubProfileData[];
}

function GitHubCardList({ data }: GitHubCardListProps) {
  return (
    <div className="card-list">
      {data?.map((user) => (
        <GitHubCardItem key={user.id} data={user} />
      ))}
    </div>
  );
}

export default GitHubCardList;