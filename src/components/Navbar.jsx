import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import productLogo from "../assets/productLogo (1).png";
import cartIcon from "../assets/iconBtn.png";
import searchIcon from "../assets/search.png";
import likeIcon from "../assets/iconBtn (1).png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menu, setMenu] = useState("home");

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className="bg-black p-6 rounded-[16px] w-full">
			<div className="flex justify-between items-center">
				{/* logo */}
				<img src={productLogo} alt="Just Shoes" />
				{/* navigation links */}
				<ul className="hidden md:flex space-x-4 text-xl">
					<li onClick={() => setMenu("home")} className="text-[#ffffff]">
						<Link
							to="/home"
							className="text-white text-xl font-medium font-['Outfit']"
						>
							Home
						</Link>

						{menu === "home" && (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-white ml-2 mt-1" />
						)}
					</li>

					<li onClick={() => setMenu("shop")} className="text-[#ffffff]">
						<Link
							to="/shop"
							className="text-white text-xl font-medium font-['Outfit']"
						>
							Shop
						</Link>

						{menu === "shop" && (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-white ml-2 mt-1" />
						)}
					</li>

					<li onClick={() => setMenu("contact")} className="text-white">
						<a
							href="/home#contact"
							className="text-white text-xl font-medium font-['Outfit']"
						>
							Contact
						</a>

						{menu === "contact" && (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-white ml-2 mt-1" />
						)}
					</li>
				</ul>
				{/* icons */}
				<div className="flex space-x-4 text-xl">
					<img src={searchIcon} alt="search icon" />
					<Link to="/cart">
						<img src={cartIcon} alt="cart icon" />
					</Link>
					<img src={likeIcon} alt="Like icon" />
				</div>
				{/* mobile menu button */}
				<div className="block md:hidden">
					<button onClick={toggleMenu}>
						<FaBars className="text-white" />
					</button>
				</div>
			</div>
			{/* mobile menu */}
			{isOpen && (
				<div className=" flex-col items-center justify-center ">
					<button onClick={closeMenu} className="absolute top-4 right-4">
						<FaTimes className="text-white text-2xl" />
					</button>
					<ul className="space-y-4 text-xl text-center">
						<li className="text-white">
							<Link
								to="/home"
								className="text-white text-xl font-medium font-['Outfit']"
							>
								Home
							</Link>
						</li>

						<li className="text-white">
							<Link
								to="/shop"
								className="text-white text-xl font-medium font-['Outfit']"
							>
								Shop
							</Link>
						</li>

						<li className="text-white">
							<Link
								to="/home"
								className="text-white text-xl font-medium font-['Outfit']"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
