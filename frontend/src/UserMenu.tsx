import { useUser } from "./UserContext";
import { Link } from "react-router-dom";

export const UserMenu = () => {
  const { isLoggedIn, user, login, logout } = useUser();

  if (isLoggedIn) {
    return (
      <>
        <Link to="/profile">My Profile</Link>
        <a onClick={logout}>Logout</a>
      </>
    );
  }

  return <a onClick={login}>Login</a>;
};
