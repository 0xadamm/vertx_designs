import React from "react";
import Image from "next/image";
import { expertiseData } from "../constants/expertiseData";

const DesignExpertise = () => {
	return (
		<section className="bg-gradient-to-t from-white/[54%] to-transparent pt-48 dark:bg-none md:pt-80 lg:py-[100px]">
			<div className="container pt-10">
				<div className="heading text-left">
					<h6>Product Design</h6>
					<h4>Our Product Design Expertise</h4>
				</div>
				<div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
					{/* I want to make the component that is rendered from the map have an on click function which when clicked will scroll to another component */}
					{expertiseData.map((item, index) => (
						<div
							key={index}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="flex items-center justify-start gap-3 rounded-[32px] border-2 border-white bg-white p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-secondary hover:bg-secondary/10 dark:border-gray-dark dark:bg-gray-dark dark:hover:border-secondary sm:justify-center md:p-10">
								<div>
									<Image
										width={50}
										height={50}
										src={item.imagePath}
										alt={item.imageAlt}
									/>
								</div>
								<h6 className="text-xl font-bold text-black dark:text-white">
									{item.title}
								</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default DesignExpertise;
