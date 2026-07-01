import { useGetCurrentUserQuery } from "@/services/userApi";

function ProfileCard() {
  const { data: currentUser } =
    useGetCurrentUserQuery();

  return (
    <section>
      <h2>Profile Summary</h2>

      <div>
        <p>
          <strong>Name:</strong>{" "}
          {currentUser?.firstName}{" "}
          {currentUser?.lastName}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {currentUser?.email}
        </p>

        <p>
          <strong>Username:</strong>{" "}
          {currentUser?.username}
        </p>
      </div>
    </section>
  );
}

export default ProfileCard;