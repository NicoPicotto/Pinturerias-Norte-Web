import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Context
import { CartProvider } from "./Context/CartContext";
//Componentes
import NavBar from "././components/NavBar/NavBar";
import Footer from "././components/Footer/Footer";
//Views
import Home from "./views/Home";
import Categoria from "./views/Categoria";
import Carrito from "./views/Carrito";
import Detalle from "./views/Detalle";
import Error from "./views/Error";
import Checkout from "./views/Checkout";

const App = () => {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/categoria/:category" element={<Categoria />} />
						<Route path="/detalle/:id" element={<Detalle />} />
						<Route path="/carrito" element={<Carrito />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</CartProvider>
	);
};

export default App;
