/* eslint-disable max-len */
import Image from "next/image";
import React from "react";

const Expertise = () => {
	return (
		<section className="py-10 lg:pt-[100px]">
			<div className="container">
				<div className="heading text-center lg:w-7/12 ltr:lg:text-left rtl:lg:text-right">
					<h6>Our Expertise</h6>
					<h4>Turning Ideas into Success</h4>
					<p className="mt-4 text-lg font-semibold">
						Our approach involves utilizing the extensive design
						expertise of our team, the industry-specific knowledge of
						our clients, and the valuable insights we gather through
						research and exploration. No information is left out in
						this collaborative process.
					</p>
				</div>
				<div className="grid gap-10 py-10 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4">
					<div>
						<div
							className="h-[100px]"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<Image
								width={70}
								height={70}
								src="/assets/images/define.png"
								alt="define"
							/>
						</div>
						<h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">
							Define
						</h4>

						<p className="font-semibold leading-[32px] md:text-lg">
							Our team conducts extensive research and analysis to
							understand your objectives, target audience, and market
							trends. We identify opportunities and obstacles in your
							industry to build a strong foundation for your
							project&apos;s success.
						</p>
					</div>
					<div>
						<div
							className="h-[100px]"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<Image
								width={70}
								height={70}
								src="/assets/images/design.png"
								alt="design"
							/>
						</div>
						<h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">
							Design
						</h4>
						<p className="font-semibold leading-[32px] md:text-lg">
							Our team creates visually appealing and user-friendly
							designs with seamless navigation, engaging visuals, and
							consistent branding. We ensure your project is
							aesthetically pleasing and highly functional for your
							users.
						</p>
					</div>
					<div>
						<div
							className="h-[100px]"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<Image
								width={70}
								height={70}
								src="/assets/images/develop.png"
								alt="develop"
							/>
						</div>
						<h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">
							Devlop
						</h4>
						<p className="font-semibold leading-[32px] md:text-lg">
							Our skilled developers use cutting-edge technologies
							and best practices to construct high-quality digital
							products that are scalable and perform well on various
							devices and platforms so that your project can succeed
							in the digital world.
						</p>
					</div>
					<div>
						<div
							className="h-[100px]"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<Image
								width={70}
								height={70}
								src="/assets/images/deploy.png"
								alt="deploy"
							/>
						</div>
						<h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">
							Deploy
						</h4>
						<p className="font-semibold leading-[32px] md:text-lg">
							Our team is dedicated to providing the perfect end
							product, to achieve this we follow a thorough testing
							process that includes various types of testing such as
							functional, usability, compatibility, and performance
							testing inorder to ensure that your project functions
							as intended.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
