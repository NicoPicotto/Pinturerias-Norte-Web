import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
	return (
		<div className="itemContainer">
			{products.map((product) => {
				return <Item key={product.id} data={product} />;
			})}
		</div>
	);
};

export default ItemList;
