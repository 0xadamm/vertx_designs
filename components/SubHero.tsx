import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Image from "next/image";

interface SubHeroProps {
	title?: string;
	subtitle: string;
	image: string;
	height: number;
	width: number;
}

const SubHero: React.FC<SubHeroProps> = ({
	title,
	subtitle,
	image,
	height,
	width
}) => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
			<div className="relative">
				<div className="container">
					<div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
						<div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
							{<h6>{title}</h6>}
							<h4 className="!text-white">{subtitle}</h4>
						</div>
						<div
							className="relative mt-6 md:mt-0"
							data-aos={isRtl ? "fade-right" : "fade-left"}
							data-aos-duration="1000"
						>
							<Image
								height={height}
								width={width}
								src={image}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubHero;
