import React from "react";

const OurApps = () => {
	return (
		<section className="relative overflow-x-hidden bg-[#F9F1FF] pt-20 dark:bg-gray-dark">
			<span className="absolute right-0 top-1/2 -translate-y-1/2">
				<svg
					width="147"
					height="300"
					viewBox="0 0 147 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.2">
						<path
							d="M147 75.6491V228.205C106.879 228.205 74.349 194.052 74.349 151.927C74.349 109.788 106.879 75.6491 147 75.6491Z"
							fill="url(#paint0_linear_1030_12905)"
						/>
						<path
							d="M146.575 0V300C65.8723 300 0.425311 232.834 0.425311 150.004C0.425311 67.1437 65.8796 0.00730931 146.582 0.00730931L146.575 0Z"
							fill="url(#paint1_linear_1030_12905)"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_1030_12905"
							x1="110.674"
							y1="93.8081"
							x2="205.119"
							y2="228.212"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#7780A1" />
							<stop
								offset="1"
								stopColor="#7780A1"
								stopOpacity="0"
							/>
						</linearGradient>
						<linearGradient
							id="paint1_linear_1030_12905"
							x1="-72.6495"
							y1="-188.567"
							x2="183.171"
							y2="318.254"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#7780A1" />
							<stop
								offset="1"
								stopColor="#7780A1"
								stopOpacity="0"
							/>
						</linearGradient>
					</defs>
				</svg>
			</span>
			<span className="absolute -right-10 top-1/2 hidden -translate-y-1/2 xl:block">
				<svg
					width="305"
					height="754"
					viewBox="0 0 305 754"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1309.07 377C1309.07 514.315 1236.1 638.771 1117.85 728.963C999.602 819.157 836.154 875 655.533 875C474.911 875 311.463 819.157 193.214 728.963C74.9662 638.771 2 514.315 2 377C2 239.685 74.9662 115.229 193.214 25.0368C311.463 -65.1566 474.911 -121 655.533 -121C836.154 -121 999.602 -65.1566 1117.85 25.0368C1236.1 115.229 1309.07 239.685 1309.07 377Z"
						fill="url(#paint0_linear_1030_12831)"
						fillOpacity="0.1"
						stroke="url(#paint1_linear_1030_12831)"
						strokeWidth="4"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1030_12831"
							x1="1311.2"
							y1="377"
							x2="270.486"
							y2="-153.475"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#B476E5" />
							<stop
								offset="1"
								stopColor="#47BDFF"
								stopOpacity="0"
							/>
						</linearGradient>
						<linearGradient
							id="paint1_linear_1030_12831"
							x1="655.65"
							y1="-123.001"
							x2="1135.45"
							y2="517.676"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#B476E5" />
							<stop
								offset="1"
								stopColor="#47BDFF"
							/>
						</linearGradient>
					</defs>
				</svg>
			</span>
			<div className="container">
				<div className="relative z-[1] flex flex-col gap-[30px] xl:flex-row">
					<div
						className="order-2 mx-auto w-full max-w-[540px] xl:order-1"
						data-aos="fade-right"
						data-aos-duration="1000"
					>
						<img
							src="/assets/images/product.png"
							alt=""
						/>
					</div>
					<div className="order-1 xl:order-2">
						<div className="heading !mb-8 text-center ltr:lg:text-left rtl:lg:text-right">
							<h4 className="!font-black">
								Experience{" "}
								<span className="bg-secondary p-1 text-white">
									your product
								</span>{" "}
								as we create it
							</h4>
							<p className="mt-5 text-lg font-medium">
								Immerse yourself in the development journey as we
								bring your vision to life, ensuring a seamless and
								interactive experience with your product every step
								of the way
							</p>
						</div>
						<div className="grid grid-cols-2 text-center">
							<div className="border-b-2 border-gray/20 bg-[#7780A1]/[0.06] px-1 py-5 dark:bg-[#212937] sm:px-4 sm:py-10">
								<span>
									<svg
										className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
										viewBox="0 0 40 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.2"
											d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
											fill="#47BDFF"
										/>
										<path
											d="M32.5 22.5C32.5 11.25 20 2.5 20 2.5C20 2.5 7.5 11.25 7.5 22.5C7.5 25.8152 8.81693 28.9946 11.1611 31.3389C13.5054 33.6831 16.6848 35 20 35C23.3152 35 26.4946 33.6831 28.8389 31.3389C31.1831 28.9946 32.5 25.8152 32.5 22.5Z"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 35V2.5"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 10L32.5 22.5"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 17.5L30.9796 28.4796"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 25L27.5004 32.5004"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">
									Secure
								</h5>
								<p className="mt-2.5 text-sm font-semibold leading-6">
									Rock-solid protection for your data
								</p>
							</div>
							<div className="border-b-2 border-gray/20 bg-[#7780A1]/[0.06] px-1 py-5 ltr:border-l-2 rtl:border-r-2 dark:bg-[#212937] sm:px-4 sm:py-10">
								<span>
									<svg
										className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
										viewBox="0 0 40 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.2"
											d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
											fill="#B476E5"
										/>
										<path
											d="M15 37.4988L17.5 24.9988L7.5 21.2488L25 2.49878L22.5 14.9988L32.5 18.7488L15 37.4988Z"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">
									Lightning-fast
								</h5>
								<p className="mt-2.5 text-sm font-semibold leading-6">
									Blazing speeds for seamless experiences
								</p>
							</div>
							<div className="bg-[#7780A1]/[0.06] px-1 py-5 dark:bg-[#212937] sm:px-4 sm:py-10">
								<span>
									<svg
										className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
										viewBox="0 0 40 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.2"
											d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
											fill="#47BDFF"
										/>
										<path
											d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M35 20H25"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M30.6066 9.39328L23.5356 16.4644"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">
									Accessible
								</h5>
								<p className="mt-2.5 text-sm font-semibold leading-6">
									Inclusive design for all users
								</p>
							</div>
							<div className="border-gray/20 bg-[#7780A1]/[0.06] px-1 py-5 ltr:border-l-2 rtl:border-r-2 dark:bg-[#212937] sm:px-4 sm:py-10">
								<span>
									<svg
										className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
										viewBox="0 0 40 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.2"
											d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
											fill="#47BDFF"
										/>
										<path
											d="M32.5 22.5C32.5 11.25 20 2.5 20 2.5C20 2.5 7.5 11.25 7.5 22.5C7.5 25.8152 8.81693 28.9946 11.1611 31.3389C13.5054 33.6831 16.6848 35 20 35C23.3152 35 26.4946 33.6831 28.8389 31.3389C31.1831 28.9946 32.5 25.8152 32.5 22.5Z"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 35V2.5"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 10L32.5 22.5"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 17.5L30.9796 28.4796"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M20 25L27.5004 32.5004"
											stroke="currentcolor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">
									Intuitive
								</h5>
								<p className="mt-2.5 text-sm font-semibold leading-6">
									Effortless navigation, user-friendly interfaces
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurApps;
