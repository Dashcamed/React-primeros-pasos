import "./navbar.css";

export const Navbar = () => {
  let nombre = "Camilo";
  const saludar = () => {
    console.log("hola " + nombre);
  };

  return (
    <nav>
      <div>
        <img
          src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1725317542/_950b2508-78d8-4061-b190-b984b14d5453_uw497w.jpg"
          alt="logo"
        />
      </div>
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
