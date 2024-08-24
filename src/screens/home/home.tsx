import Header from "../../components/ui/header/Header"
import Categories from "./components/Categories"
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
    </>
  )
}
export default Home