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
				item.id === id && item.quantity + delta > 0
					? { ...item, quantity: item.quantity + delta }
					: item
			)
		);
	};

	const handleRemoveItem = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const totalAmount = 60000 + 999 + 3000;

	return (
		<div className="flex flex-col lg:flex-row min-h-screen">
			{/* Left Side */}
			<div className="p-8 bg-gray-100 w-full lg:w-3/5">
				<div className="flex items-center mb-8">
					<button className="mr-4">
						<i className="fas fa-arrow-left"></i>
					</button>
					<h1 className="text-2xl font-medium">Shopping Cart</h1>
					<span className="ml-2 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-medium">
						{cartItems.length}
					</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="bg-white p-4 rounded-xl shadow-lg flex relative"
						>
							<button
								onClick={() => handleRemoveItem(item.id)}
								className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-300"
							>
								&times;
							</button>
							<div className="w-1/3 h-36 bg-gray-400 rounded-3xl mr-4 flex-shrink-0 flex items-center justify-center">
								<img
									src={item.img}
									alt={item.name}
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<div className="flex-1 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold">{item.name}</h3>
									<p className="text-lg">{item.model}</p>
									<p className="text-lg font-semibold">{item.price}</p>
								</div>
								<div className="flex items-center mt-4">
									<button
										onClick={() => handleQuantityChange(item.id, -1)}
										className="bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition duration-300"
									>
										-
									</button>
									<p className="px-4">{item.quantity}</p>
									<button
										onClick={() => handleQuantityChange(item.id, 1)}
										className="bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition duration-300"
									>
										+
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<hr className="border-dashed border-2 border-gray-300 mb-8" />

				{/* Summary */}
				<div className="flex flex-col space-y-4">
					{[
						{ label: "SUB TOTAL", amount: "N60,000" },
						{ label: "VAT", amount: "N999" },
						{ label: "DELIVERY", amount: "N3,000" },
						{ label: "TOTAL", amount: `N${totalAmount}` },
					].map((item, index) => (
						<div key={index} className="flex items-center justify-between">
							<div className="flex items-center">
								<i className="fas fa-check text-green-500 mr-2"></i>
								<p className="text-xl">{item.label}:</p>
							</div>
							<p className="text-xl">{item.amount}</p>
						</div>
					))}
				</div>
			</div>

			{/* Right Side */}
			<div className="w-full lg:w-2/5 bg-gray-300 p-8 flex flex-col justify-between">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h3 className="text-2xl font-bold mb-6">Payment Info</h3>
					<div className="mb-4">
						<p className="block text-xl font-medium mb-2">
							Choose Payment Method
						</p>
						<div className="flex flex-col">
							<label className="flex items-center mb-2">
								<input type="checkbox" className="mr-2" defaultChecked={true} />
								Visa
							</label>
							<label className="flex items-center mb-2">
								<input type="checkbox" className="mr-2" />
								Master Card
							</label>
							<label className="flex items-center">
								<input type="checkbox" className="mr-2" />
								Verve
							</label>
						</div>
					</div>
					<div className="mb-4">
						<p className="block text-xl font-medium mb-8">Card Holder Name</p>
						<hr className="border-gray-300" />
					</div>
					<div className="mb-4">
						<p className="block text-xl font-medium mb-8">Card Number</p>
						<hr className="border-gray-300" />
					</div>
					<div className="flex justify-between mb-4">
						<div className="w-1/2 pr-2">
							<p className="block text-xl font-medium mb-8">Expiry Date</p>
							<hr className="border-gray-300" />
						</div>
						<div className="w-1/2 pl-2">
							<p className="block text-xl font-medium mb-8">CVV</p>
							<hr className="border-gray-300" />
						</div>
					</div>
					<Link
						to="/success"
						className="bg-green-500 text-white py-3 rounded-lg text-center block w-full hover:bg-green-600 transition duration-300"
					>
						Checkout
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
