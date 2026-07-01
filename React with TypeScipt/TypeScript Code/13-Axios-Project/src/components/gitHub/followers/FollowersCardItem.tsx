import type { FollowersData } from "../../../types/github";

interface FollowersCardItemProps {
  followers: FollowersData;
}

function FollowersCardItem({ followers }: FollowersCardItemProps) {
  return (
    <div>
      <img src={followers.avatar_url} alt={followers.login} style={{ width: 150 }} />
      <h2>{followers.login}</h2>
      <a href={followers.html_url} target="_blank" rel="noreferrer">
        See GitHub
      </a>
    </div>
  );
}

export default FollowersCardItem;