import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import MealsSection from "./components/MealsSection";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MealsSection />
      <Footer />
    </div>
  );
}

export default Home;