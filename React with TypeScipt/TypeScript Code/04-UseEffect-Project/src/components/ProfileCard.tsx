import { type GithubProfile } from "../types/types";


interface ProfileCardProps {
  profile: GithubProfile | null;
}

function ProfileCard({
  profile,
}: ProfileCardProps) {
  if (!profile) return null;

  return (
    <div>
      <img
        src={profile.avatar_url}
        alt={profile.login}
        width="150"
      />

      <h2>{profile.name}</h2>

      <h3>{profile.login}</h3>

      <p>{profile.bio}</p>

      <p>
        Followers: {profile.followers}
      </p>

      <p>
        Following: {profile.following}
      </p>

      <p>
        Public Repos:
        {profile.public_repos}
      </p>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
}

export default ProfileCard;