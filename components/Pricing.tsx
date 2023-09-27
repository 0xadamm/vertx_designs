import CircleCheck from "../components/CircleCheck";
import MostPopular from "./MostPopular";

type PricingProps = {
	title: string;
	subtitle: string;
	firstPackageTitle: string;
	deliverable1: string;
	deliverable2: string;
	deliverable3: string;
	deliverable4: string;
	deliverable5: string;
	firstPackagePrice: string;
	secondPackageTitle: string;
	deliverable6: string;
	deliverable7: string;
	deliverable8: string;
	deliverable9: string;
	deliverable10: string;
	secondPricePackage: string;
	thirdPackageTitle: string;
	deliverable11: string;
	deliverable12: string;
	deliverable13: string;
	deliverable14: string;
	deliverable15: string;
	thirdPricePackage: string;
};

const Pricing: React.FC<PricingProps> = ({
	title,
	subtitle,
	firstPackageTitle,
	deliverable1,
	deliverable2,
	deliverable3,
	deliverable4,
	deliverable5,
	firstPackagePrice,
	secondPackageTitle,
	deliverable6,
	deliverable7,
	deliverable8,
	deliverable9,
	deliverable10,
	secondPricePackage,
	thirdPackageTitle,
	deliverable11,
	deliverable12,
	deliverable13,
	deliverable14,
	deliverable15,
	thirdPricePackage,
}) => {
	return (
		<section className="bg-gradient-to-t from-transparent to-white/[55%] py-12 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent lg:py-24">
			<div className="container">
				<div className="heading mb-0 text-center">
					<h2>{title}</h2>
					<h1>{subtitle}</h1>
				</div>

				{/*Cards Container*/}

				<div
					className="mt-14 grid grid-cols-1 justify-between gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-7"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					{/*Card 1*/}

					<div className="group relative space-y-6 rounded-[32px] border-2 border-primary bg-white p-7 duration-200 hover:bg-primary hover:text-white dark:border-gray/[0.1] dark:bg-gray-dark dark:hover:border-primary">
						<div className="item-center absolute -top-[30px] left-1/2 mx-auto inline-flex -translate-x-1/2 justify-between rounded-[78px] bg-primary px-8 py-4 text-white">
							<h5 className="text-[22px] font-black">
								{firstPackageTitle}
							</h5>
						</div>
						<div className="mt-14 flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable1}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable2}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable3}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={false} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable4}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={false} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable5}</p>
							</div>
						</div>

						<div className="my-7 h-[2px] bg-gray/10"></div>
						<div className="text-center">
							<button
								type="button"
								className="btn px-[26px] py-[19px] text-[22px] font-black text-white group-hover:bg-white group-hover:text-primary"
							>
								{firstPackagePrice}
								{/* <span className="text-sm font-bold">/month</span> */}
							</button>
						</div>
						<h5 className="font-blod mt-4 text-center text-sm text-black group-hover:text-white">
							Billed every month
						</h5>
					</div>

					{/*Card 2*/}

					<div className="group relative space-y-6 rounded-[32px] border-2 border-transparent bg-black p-7 text-white duration-200 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-white/5 dark:hover:border-white dark:hover:text-white">
						<div className="item-center absolute -top-[30px] left-1/2 mx-auto flex -translate-x-1/2 justify-between rounded-[78px] bg-gray px-8 py-4 text-white">
							<h5 className="text-[22px] font-black">
								{secondPackageTitle}
							</h5>
						</div>
						<div className="absolute top-0 group-hover:text-black ltr:right-0 rtl:left-0 dark:group-hover:text-white">
							{/* Most Popular  */}
							<MostPopular />
						</div>
						<div className="mt-14 flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable6}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable7}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable8}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable9}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable10}</p>
							</div>
						</div>

						<div className="my-7 h-[2px] bg-gray/10"></div>
						<div className="text-center">
							<button
								type="button"
								className="btn bg-white px-[26px] py-[19px] text-[22px] font-black text-black group-hover:bg-black group-hover:text-white"
							>
								{secondPricePackage}
								{/* <span className="text-sm font-bold">/month</span> */}
							</button>
						</div>
						<h5 className="font-blod mt-4 text-center text-sm">
							Billed every month
						</h5>
					</div>

					{/*Card 3*/}

					<div className="group relative space-y-6 rounded-[32px] border-2 border-secondary bg-white p-7 duration-200 hover:bg-secondary hover:text-white dark:border-gray/[0.1] dark:bg-gray-dark dark:hover:border-secondary">
						<div className="item-center absolute -top-[30px] left-1/2 mx-auto flex -translate-x-1/2 justify-between rounded-[78px] bg-secondary px-8 py-4 text-white">
							<h5 className="text-[22px] font-black">
								{thirdPackageTitle}
							</h5>
						</div>

						<div className="mt-14 flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable11}</p>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable12}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable13}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable14}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<CircleCheck isActive={true} />
							</div>
							<div>
								<p className="text-sm font-bold">{deliverable15}</p>
							</div>
						</div>
						<div className="my-7 h-[2px] bg-gray/10"></div>
						<div className="text-center">
							<button
								type="button"
								className="btn bg-secondary px-[26px] py-[19px] text-[22px] font-black text-white group-hover:bg-white group-hover:text-secondary"
							>
								{thirdPricePackage}
								{/* <span className="text-sm font-bold">/Year</span> */}
							</button>
						</div>
						<h5 className="font-blod mt-4 text-center text-sm text-black group-hover:text-white">
							Billed every month
						</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
