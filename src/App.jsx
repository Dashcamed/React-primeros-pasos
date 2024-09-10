import { useState } from "react";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import PruebaGrid from "./components/common/pruebaGrid/pruebaGrid";

function App() {
  const [montarComponente, setMontarComponente] = useState(false);
  const montarYdesmontar = () => {
    setMontarComponente(!montarComponente);
  };
  const [saludo, setSaludo] = useState("hola");
  const cambiarSaludo = () => {
    if (saludo === "hola") {
      setSaludo("chau");
    } else {
      setSaludo("hola");
    }
  };
  return (
    <div>
      <Navbar />
      {montarComponente ? <ItemListContainer greetings={saludo} /> : null}
      <button onClick={montarYdesmontar}>Montar/desmontar</button>
      <button onClick={cambiarSaludo}>cambiar saludo</button>
      <CounterContainer />
      <PruebaGrid />
    </div>
  );
}

export default App;
