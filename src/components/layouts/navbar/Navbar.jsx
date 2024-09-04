import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container-nav">
      <div>Logo</div>
      <div>
        <ul>
          <li>panaderia</li>
          <li>pasteleria</li>
          <li>bolleria</li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
