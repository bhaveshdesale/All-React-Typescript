import type { Reel } from "../../types/reel";

interface ReelCardProps {
  reel: Reel;
}

function ReelCard({ reel,}: ReelCardProps) {
  return (
    <article className="reel-card">

      <img
        src={reel.thumbnail}
        alt={reel.title}
      />

      <div className="reel-content">

        <h3>{reel.title}</h3>

        <p>{reel.description}</p>

      </div>

    </article>
  );
}

export default ReelCard;