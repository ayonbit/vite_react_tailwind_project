import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Team from "./Components/Team";
import Video from "./Components/Video";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Map />
      <Video />
      <Team />
      <Footer />
    </>
  );
}

export default App;
