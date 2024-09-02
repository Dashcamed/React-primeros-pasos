import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
