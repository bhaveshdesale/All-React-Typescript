import { Link } from "react-router-dom";
import type { GitHubProfileData } from "../../types/github";

interface GitHubCardItemProps {
  data: GitHubProfileData;
}

function GitHubCardItem({ data }: GitHubCardItemProps) {
  return (
    <Link
      to={`/users/${data.login}`}
      className="GitHub_Card"
      style={{ cursor: "pointer", textDecoration: "none" }}
    >
      <img src={data.avatar_url} alt={data.login} width={100} />
      <h3>{data.login}</h3>
    </Link>
  );
}

export default GitHubCardItem;