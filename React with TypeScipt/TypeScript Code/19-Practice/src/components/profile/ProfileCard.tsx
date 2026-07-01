import type{ Developer } from "../../types/developers";
import "../../styles/profile/profile.css"
interface ProfileCardProps {
  developer: Developer;
}

function ProfileCard({ developer }: ProfileCardProps) {
  return (
    <section className="profileCard-section">
      <div className="profile-img-div">
      <img src={developer.image} alt={developer.firstName} />
      </div>
      <div className="rest-div">
      <h2>
        {developer.firstName} {developer.lastName}
      </h2>

      <p>{developer.email}</p>

      <p>{developer.phone}</p>

      <p>{developer.company.name}</p>

      <p>{developer.company.title}</p>

      <p>{developer.address.city}</p>

      <p>{developer.address.country}</p>
      </div>
    </section>
  );
}

export default ProfileCard;
