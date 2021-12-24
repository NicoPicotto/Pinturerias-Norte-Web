import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const { category } = useParams();

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const q = category
				? query(collection(db, "productos"), where("category", "==", category))
				: collection(db, "productos");
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setLoading(false);
			setProducts(docs);
		};
		getProducts();
	}, [category]);

	return (
		<div className="itemContainer">
			{loading && <Loading />}
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
