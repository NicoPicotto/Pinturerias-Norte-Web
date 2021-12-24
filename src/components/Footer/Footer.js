import React from "react";
import { Card } from "react-bootstrap";
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialLinkedin,
} from "react-icons/ti";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<Card className="footerContainer">
				<Card.Body className="footerBody">
					<Card.Text className="footerText">
						¡No olvides seguirnos en nuestras redes!
					</Card.Text>
					<TiSocialFacebook className="footerSocial" />
					<TiSocialInstagram className="footerSocial" />
					<TiSocialLinkedin className="footerSocial" />
				</Card.Body>
				<Card.Header className="footerHeader">
					Pinturerías Norte © Todos los derechos reservados.
				</Card.Header>
			</Card>
		</div>
	);
};

export default Footer;
