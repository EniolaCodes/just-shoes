import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import cartIcon from "../assets/iconBtn.png";
import shoeData from "../../shoeData"; // Import shoes data

const ShoeDetail = () => {
	const { id } = useParams();
	const shoe = shoeData.find((s) => s.id === parseInt(id));
	const [count, setCount] = useState(1);
	const [selectedSize, setSelectedSize] = useState("");
	const navigate = useNavigate();
	const relatedShoes = shoeData
		.filter((s) => s.id !== parseInt(id))
		.slice(0, 3); // Replace with actual related shoes

	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};
	return (
		<div className="p-8 bg-gray-100 min-h-screen flex flex-col md:flex-row">
			<div className="md:w-1/2 ">
				<div className={`${shoe.color} p-4 rounded-3xl w-[386px] h-[572px]`}>
					<div className="w-full h-auto flex flex-col justify-between">
						<div>
							<p className="text-[#ffffff] text-xs font-medium font-['outfit']">
								{shoe.name}
							</p>
							<p className="text-[#ffffff] text-2xl font-medium font-['outfit']">
								{shoe.model}
							</p>
							<p className="text-[#ffffff] text-sm font-['outfit']">
								{shoe.price}
							</p>
						</div>
						<img
							src={shoe.img}
							alt={shoe.name}
							className="w-full h-auto object-contain mt-4"
						/>
					</div>
				</div>
			</div>

			<div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
				<div className="flex justify-between gap-6">
					{relatedShoes.map((relatedShoe, index) => (
						<div
							key={index}
							className={`${relatedShoe.color} p-4 rounded-3xl 4-60 h-80`}
						>
							<div className="w-full h-auto flex flex-col justify-between">
								<div>
									<p className="text-[#ffffff] text-xs font-medium font-['outfit']">
										{relatedShoe.name}
									</p>
									<p className="text-[#ffffff] text-2xl font-medium font-['outfit']">
										{relatedShoe.model}
									</p>
									<p className="text-[#ffffff] text-sm font-['outfit']">
										{relatedShoe.price}
									</p>
								</div>
								<div className="h-[275px]">
									<img
										src={relatedShoe.img}
										alt="Related Shoe"
										className="w-[347.33px] h-[183.72px] object-contain"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-8 w-full max-w-sm">
					<h2 className="text-2xl font-bold mb-4">Select Size</h2>
					<div className="flex space-x-4 font-medium">
						{["SM", "MD", "LG", "XL", "XXL"].map((size) => (
							<button
								key={size}
								onClick={() => handleSizeSelect(size)}
								className={`w-12 h-12 rounded-[84.65px]  border-2 ${
									selectedSize === size
										? "bg-black text-white"
										: "bg-white text-black"
								} transition duration-300`}
							>
								{size}
							</button>
						))}
					</div>
				</div>
				<div className="flex items-center space-x-8 mb-8 mt-8 lg:mt-8">
					<button
						onClick={() => setCount(count + 1)}
						className="bg-[#ffffff] rounded-full text-[10.16px] w-[76px] h-[76px] p-[19px] text-center"
					>
						<FaPlus className="w-[38px] h-[38px] " />
					</button>
					<button
						onClick={() => navigate("/cart")}
						className="bg-[#000000]  text-[10.16px] w-[76px] h-[76px] p-[19px]  rounded-full shadow-lg hover:opacity-95 duration-300 flex items-center justify-center"
					>
						<img src={cartIcon} alt="cart icon" className="w-[38px] h-[38px]" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShoeDetail;
