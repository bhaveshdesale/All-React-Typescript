import type { FollowersData } from "../../../types/github";
import FollowersCardItem from "./FollowersCardItem";

interface FollowersCardListProps {
  followersData: FollowersData[];
}

function FollowersCardList({ followersData }: FollowersCardListProps) {
  return (
    <div className="followers-main-page">
      {followersData.map((data) => (
        <div key={data.id} className="followers-page">
          <FollowersCardItem followers={data} />
        </div>
      ))}
    </div>
  );
}

export default FollowersCardList;