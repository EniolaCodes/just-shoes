import heroShoe from "../assets/shoe1.png";

const Home = () => {
	return (
		<div className=" flex flex-col md:flex-row gap-6 items-center justify-between p-6 h-screen  overflow-y-hidden">
			<div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
				<h1 className="text-4xl md:text-7xl font-medium text-[#000000] mb-4 font-['outfit'] w-[457px] ">
					Update Your <br />
					Collection
				</h1>
				<p className="text-[32px] md:text-2xl font-normal text-{#565656] mb-6 font-['outfit'] w-[457px] ">
					Your One Shop Shoe Plug
				</p>
				<div className="w-[226px] h-16 pl-6 pr-4 py-5 bg-black rounded-2xl shadow justify-center items-center gap-2 inline-flex">
					<div className="text-center text-white text-2xl font-medium font-['Inter']">
						Shop Now
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="md:w-1/2 flex justify-center">
				<img
					src={heroShoe}
					alt="Shoe"
					className="w-full max-w-md:w-[813.60px] h-[456.80px] "
				/>
			</div>
		</div>
	);
};

export default Home;
