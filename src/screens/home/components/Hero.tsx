import { Link } from "react-router-dom"
import AutoSlider from "../../../components/ui/auto-slider/AutoSlider"

const images = [
    {
        imgSrc: "https://images.ctfassets.net/pgltshdqevs3/77cgWf8Iek59UqNjCwCiPU/b5017768556db322fbfca2d9b7b1adb2/Blue_L-1083x450_2x.jpg?fm=webp&w=2166&q=30",
        url: "/#"
    },
    {
        imgSrc: "https://images.ctfassets.net/mmeshd7gafk1/4tdGxE0KiwrY0UVSxwrot3/5f6dcda5373837caf9cac438b0b68c3f/HP-desktop-min.jpeg",
        url: "/#"
    },
    {
        imgSrc: "https://images.ctfassets.net/mmeshd7gafk1/3Xpl0rtrXbBRIZDONnbeNm/da1ec02caca4b8dcba2f8c5b31c68d6b/GENERIC_HPBANNERS_iPad2021_Desktop_US.jpg",
        url: "/#"
    },
]

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
       <div className="heroContent">
      <div className="heroContent__sliderBlock">
        <AutoSlider images={images} interval={3000}/>
      </div>
        <div className="static-imgBlock">
       <Link to={"/#"}>
       <img src="https://images.ctfassets.net/pgltshdqevs3/77cgWf8Iek59UqNjCwCiPU/b5017768556db322fbfca2d9b7b1adb2/Blue_L-1083x450_2x.jpg?fm=webp&w=2166&q=30" alt="" />
       </Link>
        </div>
       </div>
        </div>
    </div>
  )
}
export default Hero