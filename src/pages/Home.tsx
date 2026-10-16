import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceGrid from "../components/ServiceGrid";

function Home() {
  return <div>
  <Navbar /> 
<main> 
  <Hero /> 
  <ServiceGrid /> 
  </main> 
  <Footer />

  </div>;
}

export default Home;
