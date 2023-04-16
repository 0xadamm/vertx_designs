import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";

const SoftwareHero = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;
	return (
		<section className="bg-black bg-[url(/assets/images/modern-saas/banner-bg.png)] bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px]">
			<div className="container lg:pt-7">
				<div className="relative">
					<div className="pb-8 pt-14 text-center text-white lg:w-3/5 lg:py-20 ltr:lg:text-left rtl:lg:text-right">
						<h2 className="text-3xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
							<span className="text-secondary">Your app </span>
							<span className="text-primary">growth reimagined</span>
						</h2>
						<p className="my-8 text-lg lg:w-3/4">
							Vertx Designs is fully equipped with everything you
							need to build a high performing website or app.
						</p>
						<Link
							href="https://calendly.com/vertxlabs-adam/introduction"
							target="_blank"
							className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto"
						>
							Book a free consultation
						</Link>
					</div>
					<div
						className="top-[70px] w-full pb-7 ltr:right-0 rtl:left-0 rtl:right-auto lg:absolute lg:max-w-[630px] lg:pb-0 xl:ltr:-right-52 xl:rtl:-left-52"
						data-aos={isRtl ? "fade-right" : "fade-left"}
						data-aos-duration="1000"
					>
						<img
							src="/assets/images/modern-saas/banner-img.png"
							// src="/assets/images/services-detail-phone.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SoftwareHero;
