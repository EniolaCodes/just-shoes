import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../lib/axiosInstance";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
import { FaPlus } from "react-icons/fa";
import cartIcon from "../assets/iconBtn.png";
import backIcon from "../assets/iconOutlined (2).png";

const ShoeDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams(); // Get the product ID from the URL
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const handleCart = () => {
		const newItem = {
			id,
			name,
			image: product.photos[0].url,
			quantity: 1,
			unitPrice: product.current_price,
			totalPrice: product.current_price * 1,
		};
		dispatch(addItem(newItem));
		navigate("/cart");
	};

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axiosInstance.get(`/products/${id}`, {
					params: {
						organization_id: "2f725d0bd09f43a4934061520b5b2655",
						Appid: "Q44WVBELNY4WNH2",
						Apikey: "b85d2378795b41c8b065e70885b8e6d620240712130944089298",
					},
				});
				if (response.ok) {
					console.log(response);
				}
				setProduct(response.data);
				setLoading(false);
			} catch (error) {
				setError("Error fetching product details.");
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="p-8 bg-indigo-500 bg-opacity-5">
			<div className="flex items-center mb-8">
				<img src={backIcon} alt="back icon" className="mr-3" />
				<h2 className="text-black text-[32px] font-medium font-['Outfit']">
					Popular
				</h2>
			</div>
			<div className=" min-h-screen flex flex-col md:flex-row">
				<div className="md:w-1/2 ">
					<div className=" p-4 bg-white shadow-md rounded-3xl h-[472px] md:w-[386px] md:h-[472px]">
						<img
							src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
							alt={product.name}
							className="w-full h-30 object-cover rounded-t-lg"
						/>
						<div className="flex flex-col justify-end mt-20">
							<h3 className="text-xl font-bold">{product.name}</h3>
							<p className="text-gray-900 text-3xl font-bold">
								N{product.current_price}
							</p>
						</div>
					</div>
					<div className="text-xl text-black font-medium w-[300px] mt-8 md:w-[400px]">
						{product.description}
					</div>
				</div>
				<div className=" flex-row mt-10 md:w-1/2 md:pl-8 md:mt-12">
					<div className="flex justify-between gap-6">
						<div className="hidden lg:block p-4 bg-white shadow-md rounded-3xl lg:w-[309px] lg:h-[290px]">
							<img
								src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
								alt={product.name}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<h3 className="text-xl font-bold mt-2">{product.name}</h3>
							<p className="text-gray-900 font-bold">
								N{product.current_price}
							</p>
						</div>
						<div className=" p-4 bg-white shadow-md rounded-3xl w-[309px] h-[290px]">
							<img
								src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
								alt={product.name}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<h3 className="text-xl font-bold mt-2">{product.name}</h3>
							<p className="text-gray-900 font-bold">
								N{product.current_price}
							</p>
						</div>
						<div className="p-4 bg-white shadow-md rounded-3xl w-[309px] h-[290px]">
							<img
								src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
								alt={product.name}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<h3 className="text-xl font-bold mt-2">{product.name}</h3>
							<p className="text-gray-900 font-bold">
								N{product.current_price}
							</p>
						</div>
					</div>

					<div className="flex items-center space-x-8 mt-16">
						<button className="bg-[#ffffff] rounded-full text-[10.16px] w-[76px] h-[76px] p-[19px] text-center">
							<FaPlus className="w-[38px] h-[38px] " />
						</button>
						<button
							onClick={handleCart}
							className="bg-[#000000]  text-[10.16px] w-[76px] h-[76px] p-[19px]  rounded-full shadow-lg hover:opacity-95 duration-300 flex items-center justify-center"
						>
							<img
								src={cartIcon}
								alt="cart icon"
								className="w-[38px] h-[38px]"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoeDetail;
