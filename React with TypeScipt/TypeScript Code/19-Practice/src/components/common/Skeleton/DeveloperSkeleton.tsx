import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DeveloperSkeleton() {
  return (
    <>
      {Array.from({
        length: 8,
      }).map((_, index) => (
        <article key={index} className="developer-card">
          <Skeleton circle width={80} height={80} />

          <Skeleton width={150} />

          <Skeleton width={220} />
        </article>
      ))}
    </>
  );
}

export default DeveloperSkeleton;