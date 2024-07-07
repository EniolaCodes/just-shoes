import heroShoe from "../assets/shoe1.png";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<div>
			<div className="relative w-full max-w-[1168.61px] h-auto md:h-[699.11px] mx-auto p-4">
				<div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
					<div className="md:w-1/2 flex flex-col justify-center items-start gap-8 mt-4 md:mt-0">
						<div className="flex flex-col justify-start items-start gap-2">
							<div className="text-black text-4xl md:text-7xl font-medium font-['Outfit'] leading-tight">
								Upgrade Your <br />
								Collections
							</div>
							<div className="text-neutral-600 text-lg md:text-[32px] font-normal font-['Outfit']">
								Sum extra dummy text goes here like so.
							</div>
						</div>
						<div className="w-full md:w-[226px] h-16 pl-6 pr-4 py-5 bg-black rounded-2xl shadow flex justify-center items-center gap-2">
							<div className="text-center text-white text-xl md:text-2xl font-medium font-['Inter']">
								Shop Now
							</div>
						</div>
					</div>
					{/* image */}
					<div className="w-full md:w-[918.61px] md:absolute md:top-0 md:left-[250px] flex justify-center items-center">
						<div className="relative">
							<div className="w-[575.20px] h-[89px] absolute origin-top-left rotate-[-4.27deg] " />
							<img className="" src={heroShoe} alt="shoe" />
						</div>
					</div>
				</div>
			</div>
			<Contact />
		</div>
	);
};

export default Home;
