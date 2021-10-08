import { useState } from "react";
import { apiHandler } from "./../utils/apiHandler";
//* css imported
import "./../css/login.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function signupUser() {
    try {
      const requestPaylod = {
        email,
        password,
        username,
      };
      const apiHandlerResponse = await apiHandler(
        "/auth/signup",
        requestPaylod
      );
      console.log("apihandleresp ", apiHandlerResponse);
    } catch (err) {
      console.log("error in signup ", err.message);
    }
  }

  function handleSignupFormSubmit(event) {
    event.preventDefault();
    signupUser();
  }

  return (
    <div className="main-section">
      <form className="login-form" onSubmit={handleSignupFormSubmit}>
        <h1 className="main-heading"> Signup</h1>
        <label htmlFor="email">Username</label>
        <input
          type="text"
          className="login-input"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="login-input"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="login-input"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span>Forgot Password ?</span>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Signup;
