import { useState } from "react";
import { Link } from "react-router-dom";
import shoeData from "../../shoeData";

const Cart = () => {
	const [cartItems, setCartItems] = useState([
		{ ...shoeData[0], quantity: 1 },
		{ ...shoeData[1], quantity: 1 },
		{ ...shoeData[2], quantity: 1 },
		{ ...shoeData[3], quantity: 1 },
	]);

	const handleQuantityChange = (id, delta) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + delta } : item
			)
		);
	};

	const handleRemoveItem = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const totalAmount = cartItems.reduce(
		(acc, item) => acc + item.quantity * parseInt(item.price.replace("N", "")),
		0
	);

	return (
		<div className="p-8 bg-gray-100 min-h-screen">
			{/* Upper Part */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
				{cartItems.map((item) => (
					<div key={item.id} className="bg-white p-4 rounded shadow-lg flex">
						<img
							src={item.img}
							alt={item.name}
							className="w-1/3 h-auto object-cover"
						/>
						<div className="w-2/3 pl-4 flex flex-col justify-between">
							<div>
								<h3 className="text-xl font-bold">{item.name}</h3>
								<p className="text-lg">{item.model}</p>
								<p className="text-lg font-semibold">{item.price}</p>
							</div>
							<div className="flex items-center mt-4">
								<button
									onClick={() => handleQuantityChange(item.id, -1)}
									className="bg-gray-300 p-2 rounded-l shadow-md hover:bg-gray-400 transition duration-300"
								>
									-
								</button>
								<p className="px-4">{item.quantity}</p>
								<button
									onClick={() => handleQuantityChange(item.id, 1)}
									className="bg-gray-300 p-2 rounded-r shadow-md hover:bg-gray-400 transition duration-300"
								>
									+
								</button>
								<button
									onClick={() => handleRemoveItem(item.id)}
									className="ml-auto text-red-500 hover:text-red-700 transition duration-300"
								>
									&times;
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<hr className="border-dashed border-2 border-gray-300 mb-8" />

			{/* Lower Part */}
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="flex items-center mb-4 md:mb-0">
					<div className="flex items-center mr-8">
						<i className="fas fa-check text-green-500"></i>
						<p className="text-xl ml-2">N60,000</p>
					</div>
					<div className="flex items-center">
						<i className="fas fa-check text-green-500"></i>
						<p className="text-xl ml-2">N999</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-end">
					<div className="flex items-center mb-4">
						<p className="text-xl font-semibold mr-2">Total:</p>
						<p className="text-2xl font-bold">N{totalAmount}</p>
					</div>
					<Link
						to="/payment"
						className="bg-green-500 text-white px-6 py-3 rounded shadow-lg hover:bg-green-600 transition duration-300"
					>
						Payment
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
