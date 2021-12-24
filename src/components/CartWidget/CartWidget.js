import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { BsFillCartFill } from "react-icons/bs";

export default function CartWidget() {
	const [cartItems] = useContext(CartContext);

	const totalItems = cartItems.reduce(
		(total, item) => total + item.cantidad,
		0
	);

	return (
		<div>
			<BsFillCartFill />
			{totalItems !== 0 && (
				<span style={{ fontSize: "0.8em" }}> {totalItems}</span>
			)}
		</div>
	);
}
