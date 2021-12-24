import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
	return (
		<div className="navContainer">
			<Navbar
				bg="info"
				variant="dark"
				sticky="top"
				expand="md"
				collapseOnSelect
			>
				<Link className="navLogo" to="/">
					{" "}
					Pinturerías Norte{" "}
				</Link>
				<Navbar.Toggle className="coloring" />
				<Navbar.Collapse>
					<Nav>
						<Link className="navLinks" to="/categoria/industrial">
							{" "}
							Industria{" "}
						</Link>
						<Link className="navLinks" to="/categoria/arquitectura">
							{" "}
							Arquitectura{" "}
						</Link>
						<Link className="navLinks" to="/categoria/automotor">
							{" "}
							Automotor{" "}
						</Link>
						<Link className="navLinks" to="/carrito">
							<CartWidget />
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
