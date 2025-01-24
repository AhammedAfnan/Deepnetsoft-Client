import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import MealsSection from "@/components/MealsSection";
import AddMenu from "@/components/AddMenu"

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MealsSection />
      <AddMenu />
      <Footer />
    </div>
  );
}

export default Home;