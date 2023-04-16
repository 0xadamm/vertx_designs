import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { IRootState } from "../store";

const Hero = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;
	return (
		<div className="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
			<div className="relative">
				<Image
					src="/assets/images/banner-lefticon.png"
					alt="banner-lefticon"
					width={200}
					height={200}
					className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
				/>
				<Image
					src="/assets/images/banner-rightIcon.png"
					alt="banner-rightIcon"
					width={200}
					height={200}
					className="absolute -top-4 right-0 sm:right-[250px] lg:right-[150px]"
				/>
				<div className="container">
					<div className="relative bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-0 pt-14 lg:pb-60 lg:pt-20 xl:pt-36">
						<div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
							<h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] ">
								<span className="italic text-primary">
									{" "}
									Empowering{" "}
								</span>
								your
								<span className="italic text-secondary">
									{" "}
									Vision{" "}
								</span>
							</h2>
							<p className="my-8 text-lg lg:w-[90%] ">
								Creative Design, Cutting-Edge Technology & Strategic
								Solutions
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
							className="bottom-0 mx-auto mb-2 mt-5 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
							data-aos={isRtl ? "fade-right" : "fade-left"}
							data-aos-duration="1000"
							data-aos-offset="0"
							data-aos-delay="200"
						>
							<Image
								src="/assets/images/home-banner-icon.svg"
								alt="home-banner-icon"
								height={6500}
								width={700}
								className="rtl:rotate-y-180"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
