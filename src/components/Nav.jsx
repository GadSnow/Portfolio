import Logo from "../img/logo3.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="header__nav">
      <Link className="header__logo" to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <ul className="header__list">
        {/* <li className="header__action">
          <Link to="/contact">Mes réalisations</Link>
        </li> */}
        <li className="header__action">
          <Link to="/contact">Me contacter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
