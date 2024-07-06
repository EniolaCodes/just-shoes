import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menu, setMenu] = useState("home");

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="bg-[#000000] p-6 rounded-[16px] w-full">
			<div className="flex justify-between items-center">
				{/* logo */}
				<img src="/src/assets/productLogo (1).png" alt="Just Shoes" />
				{/* navigation links */}
				<ul className="hidden md:flex space-x-4 text-xl">
					<li
						onClick={() => {
							setMenu("home");
						}}
						className="text-[#ffffff]"
					>
						<Link to="/home" className="font-[outfit]">
							Home
						</Link>
						{menu === "home" ? (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-[#ffffff] ml-2 mt-1" />
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
						<Link to="/shop" className="font-[outfit]">
							Shop
						</Link>
						{menu === "shop" ? (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-[#ffffff] ml-2 mt-1" />
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
						<Link to="/contact" className="font-[outfit]">
							Contact
						</Link>
						{menu === "contact" ? (
							<hr className="underline w-[80%] h-[3px] border-none rounded-[10px] bg-[#ffffff] ml-2 mt-1" />
						) : (
							<></>
						)}
					</li>
				</ul>
				{/* icons */}
				<div className="flex space-x-4 text-xl">
					<Link to="/search">
						<img src="/src/assets/search.png" alt="Search icon" />
					</Link>
					<Link to="/cart" className="">
						<img src="/src/assets/iconBtn.png" alt="cart icon" />
					</Link>
					<Link to="/profile" className="">
						<img src="/src/assets/iconBtn (1).png" alt="like icon" />
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
							<Link to="/home" className="font-[outfit]">
								Home
							</Link>
						</li>
						<li className="text-[#ffffff] block px-2 py-1">
							<Link to="/shop" className="font-[outfit]">
								Shop
							</Link>
						</li>
						<li className="text-[#ffffff] block px-2 py-1">
							<Link to="/contact" className="font-[outfit]">
								Contact
							</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
