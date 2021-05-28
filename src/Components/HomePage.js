import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardGroup, Container } from "react-bootstrap";
import CusImages from "../images/carousel-1.jpg";
import CustomImages from "../images/carousel-2.jpg";
import CustomsImages from "../images/carousel-3.jpg";
import CardImages from "../images/card-1.jpg";
import CardImage from "../images/card-2.png";
import CardImg from "../images/card-3.jpeg";

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
          <img
            className="d-block w-100"
            src={CustomImages}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="sliding-name">Corrugated Boxes Manufacturer</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CustomsImages}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="sliding-name">Feel free to contact us</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <CardGroup>
          <Card>
            <Card.Img variant="top" className="crd-img" src={CardImages} />
            <Card.Body>
              <Card.Title>Corrugated Cardboard Boxes</Card.Title>
              <Card.Text>
              We are involved in manufacturing and supplying a wide collection of Corrugated Cardboard Boxes.
              </Card.Text>
            </Card.Body> 
          </Card>
          <Card>
            <Card.Img variant="top" className="crd-img" src={CardImage} />
            <Card.Body>
              <Card.Title>Cardboard Box Manufacturer</Card.Title>
              <Card.Text>
              Our clients can avail from us a range of Corrugated Cardboard Boxes that are made from quality material.
              </Card.Text>
            </Card.Body>   
          </Card>
          <Card>
            <Card.Img variant="top" className="crd-img" src={CardImg} />
            <Card.Body>
              <Card.Title>3 Ply, 5 Ply Corrugated Boxes</Card.Title>
              <Card.Text>
              We are one of the prominent manufacturers and traders of wide range of multi color offset printed paper.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
