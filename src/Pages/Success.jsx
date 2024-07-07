import sucesssIcon from "../assets/Image.png";
import { Link } from "react-router-dom";

const Success = () => {
	return (
		<div className="py-14 flex flex-col justify-center items-center">
			<div className="w-56 h-[198px] relative">
				<div className="w-56 h-11 left-0 top-[152px] absolute bg-fuchsia-500 rounded-full blur-[100px]" />
				<div className="">
					<img
						src={sucesssIcon}
						alt="successful payment"
						className="shadow-fushia-500"
					/>
				</div>
			</div>

			<div className="pb-8  justify-start items-center flex flex-col">
				<div className="text-center text-black text-[64px] font-bold">
					Successful
				</div>
				<div className="text-center text-neutral-400 text-[40px] font-medium font-['Outfit']">
					Thanks for shopping with us
				</div>
			</div>
			<Link
				to="/shop"
				className="w-[226px] h-16 pl-6 pr-4 py-5 bg-black rounded-2xl shadow flex justify-center items-center"
			>
				<div className="text-center text-white text-2xl font-medium">
					Explore More
				</div>
			</Link>
		</div>
	);
};

export default Success;
