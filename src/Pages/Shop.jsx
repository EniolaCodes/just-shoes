import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../lib/axiosInstance";


const Shop = () => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchProducts = async (page = 1) => {
		try {
			const response = await axiosInstance.get("/products", {
				params: {
					organization_id: "2f725d0bd09f43a4934061520b5b2655",
					reverse_sort: false,
					page,
					size: 10,
					Appid: "Q44WVBELNY4WNH2",
					Apikey: "b85d2378795b41c8b065e70885b8e6d620240712130944089298",
				},
			});

			const items = response.data.items.map((item) => ({
				id: item.id,
				name: item.name,
				price: extractPrice(item.current_price),
				image: item.photos.length > 0 ? item.photos[0].url : "",
			}));

			setProducts(items);
			setTotalPages(Math.ceil(response.data.total / 10));
			setLoading(false);
		} catch (error) {
			console.error("Error fetching products:", error);
			setError("Error fetching products.");
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts(page);
	});

	const extractPrice = (current_price) => {
		if (
			current_price &&
			current_price.length > 0 &&
			current_price[0].NGN &&
			current_price[0].NGN.length > 0
		) {
			return current_price[0].NGN[0];
		}
		return "Price not available";
	};

	const handlePageChange = (pageNumber) => {
		setPage(pageNumber);
		setLoading(true);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="bg-indigo-500 bg-opacity-5 min-h-screen space-y-8 w-full p-6">
			<div className="flex gap-6 items-center text-xl">
				<div className="w-[59px] h-[45px] p-2 flex-col justify-center items-center gap-1 inline-flex">
					<div className="text-black text-xl font-medium font-['Outfit']">
						Popular
					</div>
					<div className="w-[22px] h-[0px] border border-black"></div>
				</div>
				<h2 className="text-[#8f8f8f]">New Releases</h2>
				<h2 className="text-[#8f8f8f]">Recommended</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{products.map((product) => (
					<Link key={product.id} to={`/product/${product.id}`}>
						<div className="bg-white shadow-md rounded-lg p-4">
							<img
								src={`https://api.timbu.cloud/images/${product.image}`}
								alt={product.name}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<h3 className="text-xl font-bold mt-2">{product.name}</h3>
							<p className="text-gray-900 font-bold">N{product.price}</p>
						</div>
					</Link>
				))}
			</div>

			<div className="flex justify-end mt-4">
				<button
					onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
					disabled={page === 1}
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
				>
					Previous
				</button>
				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index}
						onClick={() => handlePageChange(index + 1)}
						className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${
							page === index + 1 ? "bg-blue-500 text-white" : ""
						}`}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() =>
						handlePageChange(page < totalPages ? page + 1 : totalPages)
					}
					disabled={page === totalPages}
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Shop;
