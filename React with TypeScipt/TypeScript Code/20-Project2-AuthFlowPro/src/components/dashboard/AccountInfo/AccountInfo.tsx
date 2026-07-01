import { useGetCurrentUserQuery } from "@/services/userApi";

function AccountInfo() {
  const { data: currentUser } = useGetCurrentUserQuery();

  return (
    <section>
      <h2>Account Information</h2>

      <div>
        <p>
          <strong>User ID:</strong> {currentUser?.id}
        </p>

        <p>
          <strong>Username:</strong> {currentUser?.username}
        </p>

        <p>
          <strong>Email:</strong> {currentUser?.email}
        </p>

        <p>
          <strong>Status:</strong> Active
        </p>
      </div>
    </section>
  );
}

export default AccountInfo;