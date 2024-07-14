import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import backIcon from "../assets/iconOutlined (2).png";

import {
	decreaseItemQuantity,
	deleteItem,
	increaseItemQuantity,
	clearCart,
} from "../cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((cart) => cart.cart.cart);

	// Calculate subtotal for each item
	const calculateSubtotal = (quantity, unitPrice) => quantity * unitPrice;

	// Calculate total by summing up all the subtotals
	const calculateTotal = (items) =>
		items.reduce(
			(total, item) => total + calculateSubtotal(item.quantity, item.unitPrice),
			0
		);

	return (
		<div className="flex flex-col lg:flex-row min-h-screen">
			{/* Left Side */}
			<div className="p-8 bg-indigo-500 bg-opacity-5 w-full lg:w-3/5">
				<div className="flex items-center mb-8">
					<img src={backIcon} alt="back icon" className="mr-3" />
					<h1 className="text-2xl font-medium">Shopping Cart</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-between relative"
						>
							<div className="flex">
								<div className="w-[150px] h-[150px] flex-shrink-0 flex items-center justify-center mr-4">
									<img
										src={`https://api.timbu.cloud/images/${item.image}`}
										alt={item.name}
										className="w-full h-full object-contain rounded-lg"
									/>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold">{item.name.name}</h3>
									<p className="text-gray-900 text-lg font-medium">
										N{item.unitPrice}
									</p>
									<div className="flex items-center mt-4">
										<button
											onClick={() => dispatch(decreaseItemQuantity(item.id))}
											className="text-neutral-600 rounded-[84.65px] bg-zinc-300 p-2 shadow-md hover:bg-zinc-400 transition duration-300"
										>
											-
										</button>
										<p className="text-black text-xs px-2 font-bold font-['Outfit']">
											{item.quantity}
										</p>
										<button
											onClick={() => dispatch(increaseItemQuantity(item.id))}
											className="bg-indigo-300 text-white font-medium text-base p-2 rounded-[84.75px] shadow-md hover:bg-indigo-400 transition duration-300"
										>
											+
										</button>
									</div>
									<p className="text-black text-lg font-extrabold font-['outfit'] leading-10 mt-2">
										Sub Total: N
										{calculateSubtotal(item.quantity, item.unitPrice)}
									</p>
								</div>
							</div>
							<div className="mt-8 flex justify-end">
								<button
									onClick={() => dispatch(deleteItem(item.id))}
									className="bg-red-400 text-white py-1 px-2 rounded"
								>
									Remove
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col items-end mt-8">
					<p className="text-black text-lg font-extrabold font-['outfit'] leading-10 mb-4">
						Total: N{calculateTotal(cartItems)}
					</p>
					<button
						onClick={() => dispatch(clearCart())}
						className="bg-neutral-500 text-white text-xl py-4 px-8 rounded mt-2"
					>
						Clear
					</button>
				</div>
			</div>

			{/* Right Side */}
			<div className="w-full lg:w-2/5 bg-indigo-500 bg-opacity-5 p-8 flex flex-col justify-between">
				<div className="bg-white rounded-lg shadow-2xl p-8 h-screen">
					<h3 className="text-black text-2xl font-medium font-['Outfit']">
						Payment Info
					</h3>
					<div className="mb-4 mt-10">
						<p className="text-neutral-400 text-base font-normal font-['outfit'] leading-loose">
							Choose Payment Method
						</p>
						<div className="flex flex-col">
							<label className="flex items-center text-black text-xl font-medium font-['outfit'] leading-loose">
								<input type="checkbox" className="mr-2" defaultChecked={true} />
								Visa
							</label>
							<label className="flex items-center text-black text-xl font-medium font-['outfit'] leading-loose">
								<input type="checkbox" className="mr-2" />
								Master Card
							</label>
							<label className="flex items-center text-black text-xl font-medium font-['outfit'] leading-loose">
								<input type="checkbox" className="mr-2" />
								Verve
							</label>
						</div>
					</div>
					<div className="mb-8 mt-4">
						<p className="text-neutral-400 text-base font-normal font-['outfit'] leading-loose">
							Card Holder Name
						</p>
						<hr className="bg-zinc-300 mt-8" />
					</div>
					<div className="mb-8 mt-4">
						<p className="text-neutral-400 text-base font-normal font-['outfit'] leading-loose">
							Card Number
						</p>
						<hr className="bg-zinc-300 mt-8" />
					</div>
					<div className="flex justify-between mt-4 mb-16">
						<div className="w-1/2 pr-2">
							<p className="text-neutral-400 text-base font-normal font-['outfit'] leading-loose">
								Expiry Date
							</p>
							<hr className="bg-zinc-300 mt-8" />
						</div>
						<div className="w-1/2 pl-2">
							<p className="text-neutral-400 text-base font-normal font-['outfit'] leading-loose">
								CRV
							</p>
							<hr className="bg-zinc-300 mt-8" />
						</div>
					</div>
					<Link
						to="/success"
						className="text-white py-3 rounded-2xl bg-black text-center text-2xl font-['outfit'] font-medium block w-full hover:opacity-1 transition duration-300"
					>
						Checkout
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
