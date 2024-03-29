import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import SubHero from "../components/SubHero";

interface ResourceProps {
	buttonIcon?: string;
	buttonText?: string;
	buttonPath?: string;
}

const Resources: React.FC<ResourceProps> = ({
	buttonPath,
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
		<div>
			<Head>
				<title>Resources | Vertx Designs</title>
			</Head>

			<SubHero
				title="Resources"
				subtitle="Unlock the Secrets to AI: Your Ultimate Resource Guide"
				image="/assets/images/resources/chatbot.svg"
				height={350}
				width={426}
			/>

			<section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
				<div className="container grid place-items-center ">
					{/* max-w-full */}
					<div className="prose max-w-full dark:prose-invert ">
						{/* Heading */}
						<h2 className="heading">
							Get Started with AI Now! Download Your Free Chatbot
							Template Today!
						</h2>

						{/* Images */}
						<div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2 lg:grid-cols-3">
							<div
								className="group h-[400px] overflow-hidden rounded-[32px] lg:col-span-2"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<img
									src="/assets/images/resources/voiceflowCanvas.png"
									alt="blog-detail-1"
									className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
								/>
							</div>
							<div
								className="group h-[400px] overflow-hidden rounded-[32px]"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<img
									src="/assets/images/resources/voiceflowDialog.png"
									alt="blog-detail-2"
									className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
								/>
							</div>
						</div>
						{/* Content */}
						<h3>Why This Chatbot Template?</h3>
						<p>
							Tired of answering the same questions over and over?
							Want to offer instantaneous, accurate information to
							your users without the overhead of human support? Our
							Free AI Chatbot Template is your solution! This
							template is a great starting point for any business
							looking to implement a chatbot on their website. It is
							built using Voiceflow, a no-code platform that allows
							you to build, prototype, and launch chatbots without
							writing a single line of code. This template is fully
							customizable and can be integrated with your website in
							minutes.
						</p>

						<h3>Key Features </h3>
						<ul>
							<li>
								<strong>24/7 Customer Support:</strong> Offer
								round-the-clock support without the need for a large
								customer service team.
							</li>
							<li>
								<strong>Instant Knowledge Retrieval:</strong> Quickly
								provide accurate information, improving customer
								satisfaction.
							</li>
							<li>
								<strong>Lead Generation:</strong> Capture and nurture
								leads automatically, increasing your sales
								opportunities.
							</li>
							<li>
								<strong>Ad Campaign Automation:</strong> Run targeted
								ads with minimal manual intervention for maximum ROI.
							</li>
							<li>
								<strong>No-Code Customization:</strong> Easily tweak
								and deploy the bot using Voiceflow, requiring zero
								coding skills.
							</li>
							<li>
								<strong>Quick Integration:</strong> Seamlessly
								integrate the chatbot with your existing website in
								minutes.
							</li>
						</ul>

						{/* Button */}
						<a
							href={buttonPath || "/resources/Chatbot_Template.vf"}
							download
							className="btn inline-flex items-center gap-5 bg-secondary px-6 py-4 text-white no-underline sm:text-lg"
						>
							{/* Button Icon */}
							<Image
								width={30}
								height={30}
								src={
									buttonIcon ||
									"/assets/images/resources/downloadIcon.svg"
								}
								alt={"chat"}
								className="m-0"
							/>
							<span className=" capitalize ">
								{buttonText || "Download Template"}
							</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Resources;
