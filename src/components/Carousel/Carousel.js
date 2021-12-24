import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../img/slider1.JPG";
import img2 from "../../img/slider2.JPG";
import img3 from "../../img/slider3.JPG";
import "./Carousel.css";

export default function LandingCarousel({
	industria,
	arquitectura,
	automotor,
}) {
	return (
		<div>
			<Carousel className="carouselContainer">
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={img1} alt="Primer Slide" />
					<Carousel.Caption>
						<h3>Lo mejor para tu industria</h3>
					</Carousel.Caption>
				</Carousel.Item>{" "}
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={img2} alt="Primer Slide" />
					<Carousel.Caption>
						<h3>Todo para darle vida a tu hogar</h3>
					</Carousel.Caption>
				</Carousel.Item>{" "}
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={img3} alt="Primer Slide" />
					<Carousel.Caption>
						<h3>Renová la estética de tu vehículo</h3>
					</Carousel.Caption>
				</Carousel.Item>{" "}
			</Carousel>
		</div>
	);
}
