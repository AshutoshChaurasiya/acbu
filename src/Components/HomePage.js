import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CusImages from '../images/carousel-1.jpg';
import CustomImages from '../images/carousel-2.jpg';
import CustomsImages from '../images/carousel-3.jpg';

export default function HomePage() {
    return (
     <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={CusImages} alt="First slide" />
                <Carousel.Caption>
                    <h1 className="sliding-name">Ashutosh Cartoon Box Udhyog</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={CustomImages} alt="Second slide" />
                <Carousel.Caption>
                    <h1 className="sliding-name">Corrugated Boxes Manufacturer</h1> 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={CustomsImages} alt="Third slide" />
                <Carousel.Caption>
                    <h1 className="sliding-name">Feel free to contact us</h1>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
     </div>
    )
}

