import type { FollowingData } from "../../../types/github";
import FollowingCardItem from "./FollowingCardItem";

interface FollowingCardListProps {
  data: FollowingData[];
}

function FollowingCardList({ data }: FollowingCardListProps) {
  return (
    <div className="following-main-page">
      {data.map((item) => (
        <div key={item.id} className="following-page">
          <FollowingCardItem data={item} />
        </div>
      ))}
    </div>
  );
}

export default FollowingCardList;