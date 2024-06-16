import { useEffect, useState } from "react";
import "./auto-slider.scss"
import { Link } from "react-router-dom"

type ImagesProps = {
    imgSrc: string;
    url: string;
}[]


const AutoSlider = ({images, interval}: {images: ImagesProps, interval: number}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

const handleMouseEnter = () => {
    setIsPaused(true)
}
const handleMouseLeave = () => {
    setIsPaused(false)
}
useEffect(() => {

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    if(!isPaused) {
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer)
    }
}, [images.length, interval, isPaused]);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="auto-slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {
                images.map((image, index) => (
                    <Link to={image?.url ?? "/#"} key={index} className="slide">
                        <img src={image.imgSrc} alt={`slide-${index}`} />
                    </Link>
                ))
            }
        </div>
        <div className="indicators">
            {
                images.map((_, index) => (
                    <button type="button" key={index} className={`indicator ${index === currentIndex ? "active-indicator" : ""}`} onClick={() => setCurrentIndex(index)}>

                    </button>
                ))
            }
        </div>
    </div>
  )
}
export default AutoSlider