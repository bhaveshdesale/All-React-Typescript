import type { Developer } from "../../types/developer";

interface ProfileCardProps {
  developer: Developer;
}

function ProfileCard({ developer }: ProfileCardProps) {
  return (
    <section>
      <img src={developer.image} alt={developer.firstName} />

      <h2>
        {developer.firstName} {developer.lastName}
      </h2>

      <p>{developer.email}</p>

      <p>{developer.phone}</p>

      <p>{developer.company.name}</p>

      <p>{developer.company.title}</p>

      <p>{developer.address.city}</p>

      <p>{developer.address.country}</p>
    </section>
  );
}

export default ProfileCard;
