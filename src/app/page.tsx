import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import MealsSection from "../components/MealsSection";
import AddMenu from "../components/AddMenu"
import CategoriesProvider from "../context/CategoryContext"

const Home: React.FC = async () => {
  const res = await fetch('http://localhost:8080/api/categories', {
    method: 'GET',
    mode: 'cors'
  })
  const data = await res.json()

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoriesProvider initialCategories={data.payload}>
        <MealsSection />
        <AddMenu />
      </CategoriesProvider>
      <Footer />
    </div>
  );
}

export default Home;