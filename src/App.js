import NavBar from "./Components/NavBar/Navbar";
import "./App.css";
import Home from "./Components/Pages/Home";
import Portfolio from "./Components/Pages/Portfolio";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Footer from "./Components/Pages/Footer";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
