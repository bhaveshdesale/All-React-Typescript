import WelcomeCard from "@/components/dashboard/WelcomeCard/WelcomeCard";
import { useGetCurrentUserQuery } from "../../services/userApi";
import ProfileCard from "@/components/dashboard/ProfileCard/ProfileCard";
import QuickActions from "@/components/dashboard/QuickActions/QuickActions";
import AccountInfo from "@/components/dashboard/AccountInfo/AccountInfo";

function Dashboard() {
  const {
    isLoading,
    isError,
  } = useGetCurrentUserQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error Loading User</h2>;
  }

  return (
     <section>

      <WelcomeCard/>
      <ProfileCard/>
      <QuickActions/>
      <AccountInfo/>

    </section>
  );
}

export default Dashboard;