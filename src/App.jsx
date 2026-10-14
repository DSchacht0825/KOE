import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyGather from "./components/WhyGather";
import About from "./components/About";
import Offerings from "./components/Offerings";
import WhyKoe from "./components/WhyKoe";
import Values from "./components/Values";
import GatheringsForGood from "./components/GatheringsForGood";
import Gatherings from "./components/Gatherings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <WhyGather />
      <About />
      <Offerings />
      <WhyKoe />
      <Values />
      <GatheringsForGood />
      <Gatherings />
      <Contact />
      <Footer />
    </div>
  );
}
