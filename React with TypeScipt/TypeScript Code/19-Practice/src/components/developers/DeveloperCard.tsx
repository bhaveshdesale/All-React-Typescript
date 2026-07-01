import { Link } from "react-router-dom";
import { memo } from "react";
import {type Developer } from "../../types/developers";

interface DeveloperCardProps {
  developer: Developer;
}

function DeveloperCard({
  developer,
}: DeveloperCardProps) {

  return (
    <Link to={`/profile/${developer.id}`}>
    <article style={{cursor:"pointer"}} className="developerCard">
      <img
        src={developer.image}
        alt={developer.firstName}
        width={100}
      />

      <h3>
        {developer.firstName}{" "}
        {developer.lastName}
      </h3>

      <p>{developer.email}</p>
    </article>
    </Link>
  );
}

export default memo(DeveloperCard);