import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";

const WhoAreWe = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<section className="relative pt-14 lg:pb-48 lg:pt-[100px] ">
			<div className="container relative z-[1]">
				<div className="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
					<div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
						<h6>Who are we?</h6>
						<h4>We thrive to help our clients have global impact</h4>
					</div>
					<p className="pb-10 text-lg font-semibold leading-[30px]">
						Vertx Designs is a dynamic team of creative professionals
						dedicated to delivering innovative solutions in product
						design, software development, and digital marketing. Our
						passion for excellence and commitment to client success
						drive us to exceed expectations and consistently produce
						exceptional results. Together, we empower businesses to
						thrive in the digital age.
					</p>
					{/* <Link
						href="/"
						className="btn capitalize text-white"
					>
						Join Our Team
					</Link> */}
				</div>
			</div>
			<div
				className="bottom-0 ltr:right-0 rtl:left-0 lg:absolute"
				data-aos={isRtl ? "fade-right" : "fade-left"}
				data-aos-duration="1000"
			>
				<Image
					height={670}
					width={1600}
					src="/assets/images/about-who-bg.png"
					alt="About"
					className="rtl:rotate-y-180"
				/>
			</div>
		</section>
	);
};

export default WhoAreWe;
