import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience/>
        <Skills/>
      </main>
    </>
  );
}

export default App;
