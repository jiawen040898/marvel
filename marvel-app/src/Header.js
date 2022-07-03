import { BrowserRouter as Router, Link, BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </BrowserRouter>
    </nav>
  );
};

export default Header;
