import Counter from "./components/common/counter/Counter";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";

function App() {
  let saludo = "Hola mundo";
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings={saludo} />
      <Counter />
    </div>
  );
}

export default App;
