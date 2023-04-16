const HowItWorks = () => {
	return (
		<section className="relative py-14 lg:py-[100px] xl:-mt-[100px]">
			<div className="absolute top-0 z-[1] h-full w-full bg-white ltr:left-0 rtl:right-0 dark:bg-black xl:w-[85%] xl:rounded-r-[32px]"></div>
			<div className="absolute -top-3 hidden h-full w-full rounded-r-[32px] bg-white/50 ltr:left-3 rtl:right-3 dark:bg-gray-dark xl:inline-block xl:w-[85%]"></div>
			<div className="container relative z-[2] ltr:xl:pr-40 rtl:xl:pl-40">
				<div className="lg:w-2/3">
					<div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
						<h6>What do we do?</h6>
						<h4>Empower Business with Cutting-Edge Solutions</h4>
					</div>
					<p className="pb-10 text-center text-lg font-semibold leading-[30px] ltr:lg:text-left rtl:lg:text-right">
						At Vertx Designs we specialize in transforming your ideas
						into reality through innovative product design,
						state-of-the-art software development, and results-driven
						digital marketing strategies. Our dedicated professionals
						are committed to helping you stay ahead of the
						competition by crafting exceptional user experiences,
						building robust and scalable applications, and elevating
						your brand's online presence. Partner with us and unlock
						your business's true potential in today's fast-paced
						digital landscape.
					</p>
				</div>
				<div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div
							className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 px-5 py-6 transition
                      hover:border-secondary hover:bg-transparent"
						>
							<span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
								01
							</span>
							<div>
								<h6 className="mb-1 font-bold text-secondary">
									Product Design
								</h6>
								<p className="text-sm font-semibold text-black dark:text-gray">
									Crafting intuitive, visually stunning designs for
									exceptional user experiences.
								</p>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div
							className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 px-5 py-6 transition
                      hover:border-secondary hover:bg-transparent"
						>
							<span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
								02
							</span>
							<div>
								<h6 className="mb-1 font-bold text-secondary">
									Software Development
								</h6>
								<p className="text-sm font-semibold text-black dark:text-gray">
									Developing custom, scalable, and reliable software
									tailored to your needs.
								</p>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div
							className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 px-5 py-6 transition
                      hover:border-secondary hover:bg-transparent"
						>
							<span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
								03
							</span>
							<div>
								<h6 className="mb-1 font-bold text-secondary">
									Digital Marketing
								</h6>
								<p className="text-sm font-semibold text-black dark:text-gray">
									Driving results with bespoke online strategies for
									brand visibility and growth
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
