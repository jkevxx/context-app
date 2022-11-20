import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Navbar = () => {
  // console.log("Navbar");
  // const user = {
  //   name: "Kevin",
  // };
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h2>{user ? `Hi ${user.name}` : "Welcome"}</h2>
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={logout}>
            Log out
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
