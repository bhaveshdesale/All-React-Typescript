import { useGetCurrentUserQuery } from "@/services/userApi";


function WelcomeCard() {
  const { data: currentUser } =
    useGetCurrentUserQuery();

  return (
    <section>
      <h2>
        👋 Welcome Back,
      </h2>

      <h1>
        {currentUser?.firstName}{" "}
        {currentUser?.lastName}
      </h1>

      <p>
        Glad to see you again.
      </p>
    </section>
  );
}

export default WelcomeCard;