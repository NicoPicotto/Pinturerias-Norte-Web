import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = ({ items }) => {
	const [cartItems, setCartItems] = useContext(CartContext);

	//Función para eliminar producto, si la cantidad es 1 lo borra, si es > 1 le reduce la cantidad en -1
	const handleBorrar = () => {
		const repetido = cartItems.find((rep) => rep.id === items.id);
		if (repetido.cantidad === 1) {
			setCartItems(cartItems.filter((rep) => rep.id !== items.id));
			toastyBorrar();
		} else {
			setCartItems(
				cartItems.map((rep) =>
					rep.id === items.id
						? { ...repetido, cantidad: repetido.cantidad - 1 }
						: rep
				)
			);
			toastyBorrar();
		}
	};

	//Toasty borrar
	const toastyBorrar = () => {
		toast.error("👎 Producto eliminado", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<Card className="cartItemsContainer">
			<Card.Img className="cartImage" variant="top" src={items.img} />
			<Card.Body className="cartBody">
				<Card.Text className="cartTitle">{items.name}</Card.Text>
				<Card.Text className="cartDetails">
					Precio Unitario ${items.price}
				</Card.Text>
				<Card.Text className="cartDetails">
					Cantidad: {items.cantidad}
				</Card.Text>
				<Button
					className="cartBorrarProducto"
					onClick={() => setCartItems(handleBorrar)}
				>
					Eliminar una unidad
				</Button>
				<ToastContainer />
			</Card.Body>
		</Card>
	);
};

export default Cart;
