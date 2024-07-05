import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menu, setMenu] = useState("home");

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="bg-[#000000] p-[24px] rounded-[16px]">
			<div className="container mx-auto flex justify-between items-center">
				{/* logo */}
				<img src="/src/assets/productLogo.png" alt="logo" />
				{/* navigation links */}
				<ul className="hidden md:flex space-x-4 text-xl">
					<li
						onClick={() => {
							setMenu("home");
						}}
						className="text-[#ffffff]"
					>
						<Link to="/home">Home</Link>
						{menu === "home" ? (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-[#ff4141] ml-2 mt-1" />
						) : (
							<></>
						)}
					</li>
					<li
						onClick={() => {
							setMenu("shop");
						}}
						className="text-[#ffffff]"
					>
						<Link to="/shop">Shop</Link>
						{menu === "shop" ? (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-[#ff4141] ml-2 mt-1" />
						) : (
							<></>
						)}
					</li>
					<li
						onClick={() => {
							setMenu("contact");
						}}
						className="text-[#ffffff] "
					>
						<Link to="/contact">Contact</Link>
						{menu === "contact" ? (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-[#ff4141] ml-2 mt-1" />
						) : (
							<></>
						)}
					</li>
				</ul>
				{/* icons */}
				<div className="flex space-x-4 text-xl">
					<Link to="/search" className="text-white">
						<CiSearch />
					</Link>
					<Link to="/cart" className="">
						<FcLike className="text-white" />
					</Link>
					<Link to="/profile" className="text-white">
						<CiShoppingCart />
					</Link>
				</div>
				{/* mobile menu button */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="">
						<FaBars />
					</button>
				</div>
				{/* mobile menu */}
				{isOpen && (
					<ul className="md:flex space-x-4 text-xl">
						<li className="text-[#ffffff] block px-2 py-1">
							<Link to="/home">Home</Link>
						</li>
						<li className="text-[#ffffff] block px-2 py-1">
							<Link to="/shop">Shop</Link>
						</li>
						<li className="text-[#ffffff] block px-2 py-1">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
