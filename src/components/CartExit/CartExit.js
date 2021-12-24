import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Form, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "./CartExit.css";

const initialState = {
	nombre: "",
	apellido: "",
	email: "",
	direccion: "",
};

const CartExit = () => {
	const [cartItems, setCartItems] = useContext(CartContext);
	const [comprador, setComprador] = useState(initialState);
	const [productosComprados, setProductosComprados] = useState("");
	const [compraID, setCompraID] = useState("");
	const date = new Date();
	const orderDate = date.toLocaleDateString();

	const precioTotal = cartItems.reduce(
		(total, item) => total + item.price * item.cantidad,
		0
	);

	const formChange = (e) => {
		const { name, value } = e.target;
		setComprador({ ...comprador, [name]: value });
		setProductosComprados({ ...cartItems });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, "compras"), {
			comprador,
			productosComprados,
			orderDate,
			precioTotal,
		});
		setCompraID(docRef.id);
		console.log(compraID);
		setComprador(initialState);
		setCartItems([]);
	};

	if (compraID !== "") {
		return (
			<div className="mensajeCompraContainer">
				<h2 className="mensajeCompra">¡Compra realizada con éxito!</h2>
				<h2 className="mensajeCompraMin">El ID de tu compra es {compraID}</h2>
			</div>
		);
	}

	return (
		<div className="formContainer">
			{/* <ToastContainer /> */}
			<Form className="cartExitContainer" onSubmit={onSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control
						type="text"
						placeholder="Nombre"
						name="nombre"
						value={comprador.nombre}
						onChange={formChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control
						type="text"
						placeholder="Apellido"
						name="apellido"
						value={comprador.apellido}
						onChange={formChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control
						type="text"
						placeholder="E-mail"
						name="email"
						value={comprador.email}
						onChange={formChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control
						type="text"
						placeholder="Dirección"
						name="direccion"
						value={comprador.direccion}
						onChange={formChange}
					/>
				</Form.Group>
				<Button type="submit" className="formEnd">
					Finalizar
				</Button>
				<Button
					className="formClean"
					onClick={() => setComprador(initialState)}
				>
					Limpiar campos
				</Button>
			</Form>
		</div>
	);
};

export default CartExit;
