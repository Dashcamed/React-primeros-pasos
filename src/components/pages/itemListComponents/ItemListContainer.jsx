import { useEffect, useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greetings }) => {
  const [name, setName] = useState("pepe");
  const handleName = () => {
    if (name === "pepe") {
      setName("juan");
    } else {
      setName("pepe");
    }
  };

  useEffect(() => {
    // fetching de datos
    console.log("hacemos la peticion"); // una tarea pesada
  }, []); //array de dependencias

  console.log("me ejecuto en el montaje y en la actualizacion");

  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="nike" precio="1200" />
        <ProductCard titulo="puma" precio="1000" />
      </div>
      <h4>{greetings}</h4>
      <button onClick={handleName}>cambiar nombre</button>
    </div>
  );
};

export default ItemListContainer;
