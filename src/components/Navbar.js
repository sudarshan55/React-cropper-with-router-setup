import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function CustomNavbar() {
  return (
    <>
      <div className="root-div">
        <Link to="/">
          <a href="#" className="nav-link">
            Home
          </a>
        </Link>

        <Link to="/login">
          <a href="#" className="nav-link">
            Signup
          </a>
        </Link>

        <Link to="/signup">
          <a href="#" className="nav-link">
            Login
          </a>
        </Link>
        <Link to="/crop">
          <a href="#" className="nav-link">
            Crop
          </a>
        </Link>
        <hr />
      </div>
    </>
  );
}
