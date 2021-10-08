import { useState } from "react";
import { apiHandler } from "./../utils/apiHandler";
import Navbar from "./Navbar";

//* css imported
import "./../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    try {
      const requestPaylod = {
        email,
        password,
      };
      const apiHandlerResponse = await apiHandler("/auth/login", requestPaylod);
      console.log("apihandleresp ", apiHandlerResponse);
    } catch (err) {
      console.log("error in login ", err.message);
    }
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    loginUser();
  }

  return (
    <div className="main-section">
      <form className="login-form" onSubmit={handleLoginFormSubmit}>
        <h1 className="main-heading"> Login</h1>
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

export default Login;
