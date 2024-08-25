import Header from "../../components/ui/header/Header"
import Categories from "./components/Categories"
import FeaturedBrands from "./components/FeaturedBrands"
import Hero from "./components/Hero"
import Usp from "./components/Usp"
import "./home.scss"
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Usp />
      <Categories />
      <FeaturedBrands />
    </>
  )
}
export default Home