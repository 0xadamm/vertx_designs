import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IRootState } from "../store";

const ServiceDetailHero = () => {
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
					<div className="relative items-center py-14 lg:flex lg:py-[100px]">
						<div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-3/5">
							<h2 className="text-4xl font-black sm:text-5xl sm:leading-[126px] xl:text-[100px]">
								UI/UX Design
							</h2>
							<p className="my-8 text-xl leading-[40px] text-[#7780A1]">
								The VertxLab team handles the full cycle of mobile
								app and website design services. We produce only
								top-tier applications and websites with great design
								UX, UI, navigation, and functionality.
							</p>
							<Link
								href="/about-us"
								className="btn mt-2 capitalize text-white"
							>
								Get A Free Quote
							</Link>
						</div>
						<div
							className="top-[100px] mt-10 h-96 w-auto ltr:right-0 rtl:left-0 lg:absolute lg:mt-0 lg:h-auto lg:w-2/5"
							data-aos={isRtl ? "fade-right" : "fade-left"}
							data-aos-duration="1000"
						></div>
						<Image
							width={500}
							height={800}
							src="/assets/images/services-detail-phone.png"
							alt="services-detail-phone"
							className="mx-auto h-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetailHero;
