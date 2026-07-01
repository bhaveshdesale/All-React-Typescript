import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ReelSkeleton() {
  return (
    <>
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <div key={index}>
          <Skeleton height={200} />

          <Skeleton />

          <Skeleton />
        </div>
      ))}
    </>
  );
}

export default ReelSkeleton;
