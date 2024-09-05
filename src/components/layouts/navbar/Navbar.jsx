import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toogleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      <h3>logo</h3>
      <ul>
        <li>panaderia</li>
        <li>pasteleria</li>
        <li>bolleria</li>
      </ul>
      <button onClick={toogleMode}>cambiar modo</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
