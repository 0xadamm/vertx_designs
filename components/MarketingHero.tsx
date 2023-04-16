import Link from "next/link";

const MarketingHero = () => {
	return (
		<div className=" bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
			<div className="relative">
				<img
					src="/assets/images/banner-lefticon.png"
					alt="banner-lefticon"
					className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
				/>
				<img
					src="/assets/images/banner-rightIcon.png"
					alt="banner-rightIcon"
					className="absolute -top-4 right-0 sm:right-[250px] lg:right-[150px]"
				/>
			</div>
			<div className="container relative bg-[url(/assets/images/world-map.png)] bg-cover">
				<div className="flex flex-col items-center gap-7 lg:flex-row ">
					<div className="flex-1 pb-14 pt-14 text-white ltr:text-center rtl:text-center lg:max-w-[558px] lg:pb-52 ltr:lg:text-left rtl:lg:text-right xl:pt-36">
						<h2 className="text-3xl font-extrabold sm:text-5xl lg:text-[70px] lg:leading-[89px]">
							We take <span className="text-secondary">care</span> of
							your
							<span className="relative text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-primary/10 after:via-primary after:to-primary/10">
								{" "}
								business.
							</span>
						</h2>
						<p className="mt-7 text-lg font-semibold">
							We believe that the power of marketing & SEO
							performance helps businesses to grow.
						</p>
						<Link
							href="https://calendly.com/vertxlabs-adam/introduction"
							target="_blank"
							className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto"
						>
							Book a free Consultation
						</Link>
					</div>
					<div
						className="mb-10 w-full max-w-[500px] flex-none lg:mb-0"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<img
							src="/assets/images/marketing/marketing-banner.png"
							// src="/assets/images/services-detail-phone.png"
							className="rtl:rotate-y-180 xl:ml-[100px]"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketingHero;
