import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
	const [cartItems, setCartItems] = useContext(CartContext);

	//Muestra la cantidad total agregada
	const totalItems = cartItems.reduce(
		(total, item) => total + item.cantidad,
		0
	);

	//Muestra el precio total
	const precioTotal = cartItems.reduce(
		(total, item) => total + item.price * item.cantidad,
		0
	);

	//Renderizado condicional
	if (totalItems === 0) {
		return (
			<div className="noProductContainer">
				<h1 className="noProductText">No tenés productos en el carrito</h1>
				<Link to="/" style={{ textDecoration: "none" }}>
					{" "}
					<Button className="goCart">Ir a los productos</Button>{" "}
				</Link>
			</div>
		);
	}

	return (
		<div>
			<Card className="cartContainer">
				<Card.Body className="cartBoxDetail">
					<Card.Title className="cartBoxTitle">
						{" "}
						Precio total: $ {precioTotal}
					</Card.Title>
					<Card.Text className="cartBoxPrice">
						Productos en el carrito: {totalItems}
					</Card.Text>
				</Card.Body>
			</Card>
			{cartItems.map((item) => {
				return <Cart key={item.id} items={item} />;
			})}
			<Card className="cartEndContainer">
				<Link to="/checkout" style={{ textDecoration: "none" }}>
					{" "}
					<Button className="goCart">Finalizar compra</Button>{" "}
				</Link>
				<Button className="cardVaciarCarrito" onClick={() => setCartItems([])}>
					Vaciar Carrito
				</Button>
			</Card>
		</div>
	);
};

export default CartContainer;
