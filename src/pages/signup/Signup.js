import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// styles
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["singup-form"]}>
      <h2>SignUp</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
      </label>
      {!isPending && <button className="btn">SignUp</button>}
      {isPending && (
        <button className="btn" disabled>
          loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
