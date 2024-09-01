import "./navbar.css";

export const Navbar = () => {
  let nombre = "Camilo";
  const saludar = () => {
    console.log("hola " + nombre);
  };

  return (
    <nav>
      <h1 className="tittle">{nombre}</h1>
      <ul>
        <li>
          <a href="/">Zapatillas</a>
        </li>
        <li>
          <a href="/">Urbanas</a>
        </li>
        <li>
          <a href="/">Deportivas</a>
        </li>
      </ul>
      <button onClick={saludar}>Saludar</button>
    </nav>
  );
};
