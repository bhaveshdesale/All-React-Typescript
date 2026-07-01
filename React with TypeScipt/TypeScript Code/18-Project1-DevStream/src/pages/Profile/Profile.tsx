import { useParams } from "react-router-dom";

import { Loader, ErrorState } from "../../components/common";

import ProfileCard from "../../components/profile/ProfileCard";

import { useGetDeveloperQuery } from "../../services/developerApi";
import { memo } from "react";
import ProfileSkeleton from "../../components/common/Skeleton/ProfileSkeleton";

function Profile() {
  const { id } = useParams();

  const {
    data,

    isLoading,

    error,
  } = useGetDeveloperQuery(Number(id));

  if (isLoading) return <ProfileSkeleton/>;

  if (error) return <ErrorState />;

  if (!data) return <ErrorState message="Developer not found." />;

  return <ProfileCard developer={data} />;
}

export default memo(Profile);