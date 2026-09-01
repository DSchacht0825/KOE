import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offerings from "./components/Offerings";
import WhyKoe from "./components/WhyKoe";
import Values from "./components/Values";
import Gatherings from "./components/Gatherings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <WhyKoe />
      <Values />
      <Gatherings />
      <Contact />
      <Footer />
    </div>
  );
}
