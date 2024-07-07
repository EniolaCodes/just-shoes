const Contact = () => {
	return (
		<div className="w-full max-w-[1300px] mx-auto p-8 flex flex-col items-center gap-8">
			<div className="text-center">
				<div className="text-black text-4xl md:text-[64px] font-medium mb-2">
					Contact Us
				</div>
			</div>
			<div className="w-full flex flex-col md:flex-row justify-start items-start gap-8 md:gap-12">
				<div className="flex flex-col md:w-1/2 justify-center items-start gap-3">
					<div className="h-20 flex flex-col gap-2">
						<label className="text-neutral-400 text-lg md:text-2xl font-normal">
							Your name
						</label>
						<input
							type="text"
							className="h-10 w-[300px] border-2 border-neutral-400 md:w-[400px]"
						/>
					</div>
					<div className="h-20  flex flex-col gap-2">
						<label className="text-neutral-400 text-lg md:text-2xl font-normal">
							Your email
						</label>
						<input
							type="email"
							className="h-10 w-[300px] border-2 border-neutral-400 md:w-[400px]"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6">
					<div className="w-full flex flex-col gap-2">
						<label className="text-neutral-400 text-lg md:text-2xl font-normal font-['Inter']">
							Your message
						</label>
						<textarea className="w-full h-40 border-2 border-neutral-400 p-2" />
					</div>
					<button className="w-full md:w-auto h-16 px-6 py-5 bg-black rounded-2xl shadow flex justify-center items-center">
						<div className="text-center text-white text-2xl font-medium font-['Inter']">
							Submit Message
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
