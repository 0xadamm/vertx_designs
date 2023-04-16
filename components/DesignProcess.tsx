import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import {
	DesignProcessProps,
	designProcessSteps,
	DesignProcessStep,
} from "../constants/designProcessData";

const DesignProcess: React.FC<DesignProcessProps> = ({ title }) => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<section className="py-14 lg:py-[100px]">
			<div className="container">
				<div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
					<h4>{title}</h4>
				</div>
				<ul>
					{designProcessSteps.map((step: DesignProcessStep) => (
						<li
							key={step.id}
							className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center"
						>
							<div
								className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
								data-aos={isRtl ? "fade-left" : "fade-right"}
								data-aos-duration="1000"
							>
								<span className="text-primary">/</span>
								{/*  Get the step number as a string, padding with leading zeros to ensure that the step number is two digits. */}

								{step.id.toString().padStart(2, "0")}
							</div>
							<div className="lg:w-4/6">
								<h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
									{step.title}
								</h4>
								<p className="text-lg font-semibold">
									{step.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default DesignProcess;
