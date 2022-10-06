import AcercaDeMi from "./components/AcercaDeMi";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App bg-modelo-50 ">
      <NavBar />
      <div className='h-16'></div>
      <Main />
      <Skills />
      <AcercaDeMi />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
