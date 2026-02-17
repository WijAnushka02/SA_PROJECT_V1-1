import { Carousel } from 'react-bootstrap'
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

function Slider() {
    return (
        <div className="slider-wrapper">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={photo1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={photo2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={photo3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;
