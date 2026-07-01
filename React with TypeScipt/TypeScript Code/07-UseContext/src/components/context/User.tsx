import { useContext } from "react";
import { UserContext } from "./UserContext";

function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    console.log("clicked on login");

    if (userContext) {
      userContext.setUser({
        name: "Bhavesh",
        email: "bhaveshdesale16@gmail.com",
      });
    }
  };

  const handleLogout = () => {
    console.log("clicked on logout");

    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
}

export default User;