import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { ServiceDetailTypes } from "../constants/serviceDetailTypes";

const ServiceDetailRtl: React.FC<ServiceDetailTypes> = ({
	title,
	subtitle,
	description,
	subdescription,
	linkPath,
	linkText,
	image,
	imageAlt,
}) => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<section className="bg-gradient-to-t from-white/[54%] to-transparent py-14 dark:bg-none lg:py-[100px]">
			<div className="container">
				<div className=" grid items-center gap-8 md:grid-cols-3 lg:grid-cols-2 xl:items-center">
					<div className="order-2 md:order-1 md:col-span-2 lg:col-auto">
						<div className="heading mb mb-5 text-center ltr:md:text-left rtl:md:text-right">
							<h6>{title || "Design"}</h6>
							<h4>{subtitle}</h4>
						</div>
						<div className="text-center font-semibold ltr:md:text-left rtl:md:text-right">
							<p className="pb-5">{description}</p>
							<p>{subdescription}</p>
							{linkPath ? (
								<Link
									href={linkPath}
									className="btn mt-10 capitalize text-white"
								>
									{linkText || "Read More"}
								</Link>
							) : null}
						</div>
					</div>
					<img
						src={image}
						alt={imageAlt}
						className="order-1 mx-auto rounded-[32px] md:order-2 md:mx-0"
						data-aos={isRtl ? "fade-right" : "fade-left"}
						data-aos-duration="1000"
					/>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetailRtl;
