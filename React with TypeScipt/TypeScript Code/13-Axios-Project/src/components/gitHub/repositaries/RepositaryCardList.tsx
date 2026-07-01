import type { RepositoryData } from "../../../types/github";
import RepositaryCardItem from "./RepositaryCardItem";

interface RepositaryCardListProps {
  data: RepositoryData[];
}

function RepositaryCardList({ data }: RepositaryCardListProps) {
  return (
    <div>
      {data.map((repo) => (
        <div key={repo.id} className="repositary-card">
          <RepositaryCardItem repos={repo} />
        </div>
      ))}
    </div>
  );
}

export default RepositaryCardList;