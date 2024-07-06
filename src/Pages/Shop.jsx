import { Link } from "react-router-dom";
import shoesData from "../../shoeData";

const Shop = () => {
	// Arrange nonsequentially
	const nonSequentialShoes = [
		shoesData[3],
		shoesData[1],
		shoesData[4],
		shoesData[0],
		shoesData[5],
		shoesData[2],
	];
	return (
		<div className="bg-gray-100 min-h-screen space-y-8 -[1238px] h-[93px] p-6">
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

			<div className="flex space-x-4">
				{shoesData.map((shoe) => (
					<Link key={shoe.id} to={`/shoe/${shoe.id}`}>
						<div className="w-[240px] h-[320px] flex flex-col self-stretch justify-between items-center px-4 py-6">
							<div
								className={`${shoe.color}; p-4 rounded-3xl flex flex-col justify-between h-full`}
							>
								<div className="flex justify-between items-center">
									<div className="flex flex-col gap-0">
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
									<div className="">
										<img src={shoe.icon} alt="" className="bg-none" />
									</div>
								</div>

								<div className="justify-start items-center">
									<img
										src={shoe.img}
										alt={shoe.name}
										className="w-[304.11px] h-[170.74px]  object-contain "
									/>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			<div className="flex gap-6 text-xl items-center ">
				<div className="w-[59px] h-[45px] p-2 flex-col justify-center items-center gap-1 inline-flex">
					<div className="text-black text-xl font-medium font-['Outfit']">
						Both
					</div>
					<div className="w-[22px] h-[0px] border border-black"></div>
				</div>

				<h2 className="text-[#8f8f8f]">Male</h2>
				<h2 className="text-[#8f8f8f]">Female</h2>
			</div>

			<div className="flex space-x-4">
				{nonSequentialShoes.map((shoe) => (
					<Link key={shoe.id} to={`/shoe/${shoe.id}`}>
						<div className="w-60 h-80 flex flex-col self-stretch justify-between items-center px-4 py-6">
							<div
								className={`${shoe.color} p-4 rounded-3xl flex flex-col justify-between h-full`}
							>
								<div className="flex justify-between items-center">
									<div className="flex flex-col gap-0">
										<p className="text-[#ffffff] text-xs font-medium font-[outfit]">
											{shoe.name}
										</p>
										<p className="text-[#ffffff] text-2xl font-medium font-[outfit]">
											{shoe.model}
										</p>
										<p className="text-[#ffffff] text-sm font-[outfit]">
											{shoe.price}
										</p>
									</div>
									<div className="">
										<img src={shoe.icon} alt="" className="bg-none" />
									</div>
								</div>

								<div className="h-[275px] justify-end items-center">
									<img
										src={shoe.img}
										alt={shoe.name}
										className="w-[304.11px] h-[170.74px]  object-contain "
									/>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Shop;
