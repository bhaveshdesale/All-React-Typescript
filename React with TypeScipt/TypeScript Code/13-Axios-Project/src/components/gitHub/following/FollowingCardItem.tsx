import type { FollowingData } from "../../../types/github";

interface FollowingCardItemProps {
  data: FollowingData;
}

function FollowingCardItem({ data }: FollowingCardItemProps) {
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} style={{ width: 150 }} />
      <h2>{data.login}</h2>
      <a href={data.html_url} target="_blank" rel="noreferrer">
        See GitHub
      </a>
    </div>
  );
}

export default FollowingCardItem;