import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offerings from "./components/Offerings";
import WhyKoe from "./components/WhyKoe";
import Values from "./components/Values";
import Gatherings from "./components/Gatherings";
import Booking from "./components/Booking";
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
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
