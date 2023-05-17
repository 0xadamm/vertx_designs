import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Image from "next/image";

interface ContactNowProps {
	buttonIcon?: string;
	buttonText?: string;
	buttonEmail?: string;
}

const ContactNow: React.FC<ContactNowProps> = ({
	buttonEmail,
	buttonIcon,
	buttonText,
}) => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;
	return (
		<section className="relative overflow-x-hidden border-t-2 border-transparent bg-gradient-to-b from-white/40 to-transparent px-4 py-12 dark:border-gray/20 dark:bg-none">
			<div className="items-center justify-center lg:flex">
				<div
					className="text-center"
					data-aos={isRtl ? "fade-left" : "fade-right"}
					data-aos-duration="1000"
				>
					<Image
						src="/assets/images/contact-text.png"
						alt="contact-text"
						width={1050}
						height={215}
						className="mx-auto sm:pt-4 xl:mx-0"
					/>
				</div>
				<div
					data-aos={isRtl ? "fade-right" : "fade-left"}
					data-aos-duration="1000"
				>
					<Image
						width={350}
						height={300}
						src={"/assets/images/envelopGirl.svg"}
						alt={""}
					/>
				</div>
			</div>
			<div className="absolute bottom-20 left-0 right-4">
				<Image
					width={220}
					height={330}
					src={"/assets/images/triangle.svg"}
					alt={""}
				/>
			</div>
			<div className="text-center">
				<a
					href={buttonEmail || "mailto:info@vertxdesigns.com"}
					className="btn inline-flex items-center gap-3 bg-secondary text-white sm:text-lg"
				>
					{/* Button Icon */}
					<Image
						width={30}
						height={30}
						src={buttonIcon || "/assets/images/plane.svg"}
						alt={"chat"}
					/>
					<span className="capitalize">
						{buttonText || "email us now"}
					</span>
				</a>
			</div>
		</section>
	);
};

export default ContactNow;
