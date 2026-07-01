import Skeleton from "react-loading-skeleton";

function ProfileSkeleton() {
  return (
    <section>
      <Skeleton circle width={150} height={150} />

      <Skeleton width={250} />

      <Skeleton width={180} />

      <Skeleton count={4} />
    </section>
  );
}

export default ProfileSkeleton;
