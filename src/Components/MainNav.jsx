// Desc: MainNav component
import { Link } from "react-router-dom";
import "../Styles/MainNav.css";

const MainNav = () => {
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list" style={{ listStyle: "none", padding: 10 }}>
          <li className="main-nav-item">
            <Link to="/SignIn">Login</Link>
          </li>
          <li className="main-nav-item">
            <Link to="/Register">Register</Link>
          </li>
          <li className="main-nav-item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
