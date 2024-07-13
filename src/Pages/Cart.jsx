import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import backIcon from "../assets/iconOutlined (2).png";
import checkIcon from "../assets/iconOutlined.png";
import boxIcon from "../assets/iconOutlined (1).png";
import {
	decreaseItemQuantity,
	deleteItem,
	increaseItemQuantity,
	clearCart,
} from "../cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((cart) => cart.cart.cart);
	console.log(cartItems);

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
							className="bg-white p-4 rounded-xl shadow-lg flex relative"
						>
							<div className="w-1/3 h-36 bg-gray-400 rounded-3xl mr-4 flex-shrink-0 flex items-center justify-center">
								<img
									src={item.img}
									// src={`https://api.timbu.cloud/images/${item.photos.url}`}
									alt={item.name}
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<div className="flex-1 flex flex-col justify-between">
								<div className="flex items-center mt-4">
									<button
										onClick={() => dispatch(decreaseItemQuantity(item.id))}
										className="text-neutal-600 rounded-[84.65px] bg-zinc-300 p-2 shadow-md hover:bg-zinc-400 transition duration-300"
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
							</div>
							<div className="flex items-end">
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

				<hr className="border-dashed border-2 border-gray-300 mt-24" />

				<div className="flex flex-col space-y-4">
					<div className="flex justify-between items-center">
						<div className="flex gap-4">
							<img src={checkIcon} alt="check icon" />
							<p className="text-neutral-600 text-xl font-medium font-['outfit'] leading-10">
								Sub Total:
							</p>
						</div>

						<p className="text-black text-xl font-medium font-['outfit'] leading-10"></p>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-4">
							<img src={checkIcon} alt="check icon" />
							<p className="text-neutral-600 text-xl font-medium font-['outfit'] leading-10">
								VAT:
							</p>
						</div>

						<p className="text-black text-xl font-medium font-['ourfit'] leading-10">
							N999
						</p>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-4">
							<img src={boxIcon} alt="check icon" />
							<p className="text-neutral-600 text-xl font-medium font-['outfit'] leading-10">
								Delivery:
							</p>
						</div>

						<p className="text-neutral-400 text-xl font-bold font-['outfit'] leading-10">
							N3000
						</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-black text-2xl font-extrabold font-['outfit'] leading-10">
							TOTAL:
						</p>
						<p className="text-black text-2xl font-extrabold font-['outfit'] leading-10">
							N60,999
						</p>
					</div>
					<div>
						<button
							onClick={() => dispatch(clearCart())}
							className="bg-neutral-500 text-white text-xl py-4 px-8 rounded mt-8"
						>
							Clear
						</button>
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="w-full lg:w-2/5 bg-indigo-500 bg-opacity-5 p-8 flex flex-col justify-between">
				<div className="bg-white rounded-lg shadow-2xl p-8 h-screen">
					<h3 className="text-black text-2xl font-medium font-['Outfit']">
						Payment Info
					</h3>
					<div className="mb-4 mt-10">
						<p className=" text-neutral-400 text-base font-normal font-['oufit'] leading-loose">
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
						<hr className=" bg-zinc-300 mt-8" />
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
						className="text-white py-3 rounded-2xl bg-black text-center text-2xl font-['outfit] font-medium block w-full hover:opacity-1 transition duration-300"
					>
						Checkout
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
