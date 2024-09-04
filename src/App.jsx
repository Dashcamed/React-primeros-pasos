import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";

function App() {
  let saludo = "Hola mundo";
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings={saludo} />
      {/* greetings=:{saludo} siempre un componente manda un objeto */}
    </div>
  );
}

export default App;
