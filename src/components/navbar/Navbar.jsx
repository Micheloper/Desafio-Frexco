import { Link } from "react-router-dom";
import { Cart } from "../../assets/icons/icons";
import { Logo } from "../Logo/Logo";
import "./Navbar.css";

export default function Navbar({ carItems }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          <Link to="/" className="logo">
            <Logo />
          </Link>
        </span>
        <div className="cart">
          <Link to="/cart">
            <Cart />
          </Link>
          <span>{carItems.length === 0 ? "0" : carItems.length}</span>
        </div>
      </div>
    </nav>
  );
}
