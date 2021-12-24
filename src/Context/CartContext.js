import React, { createContext, useState } from "react";

//Context
export const CartContext = createContext();

//Context Provider
export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	//Retorno del Context Provider con children
	return (
		<CartContext.Provider value={[cartItems, setCartItems]}>
			{children}
		</CartContext.Provider>
	);
};
