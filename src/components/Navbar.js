import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

// styles
import styles from "./Navbar.module.css";

import React from "react";

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
