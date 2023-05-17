import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PROJECTS } from "../constants/projects";

const PortfolioProjects = () => {
	const [activeTab, setActiveTab] = useState<string>("all");
	return (
		<section className="pb-14 pt-12 md:pb-[100px]">
			<div className="container">
				<div className="overflow-x-auto">
					<ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
						<li
							className={`filter ${
								activeTab === "all" ? "active" : ""
							}`}
						>
							<button
								type="button"
								onClick={() => setActiveTab("all")}
								className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
							>
								All Work
							</button>
						</li>
						<li
							className={`filter ${
								activeTab === "design" ? "active" : ""
							}`}
						>
							<button
								type="button"
								onClick={() => setActiveTab("design")}
								className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
							>
								Design
							</button>
						</li>
						<li
							className={`filter ${
								activeTab === "website" ? "active" : ""
							}`}
						>
							<button
								type="button"
								onClick={() => setActiveTab("website")}
								className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
							>
								Website
							</button>
						</li>
						{/* //Todo Mobile Apps */}
						{/* <li
							className={`filter ${
								activeTab === "app" ? "active" : ""
							}`}
						>
							<button
								type="button"
								onClick={() => setActiveTab("app")}
								className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
							>
								Mobile App
							</button>
						</li> */}
					</ul>
				</div>
				{/* Projects  */}
				<div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{PROJECTS.map(project =>
						project.category.includes(activeTab) ? (
							<div
								key={project.id}
								className="project block"
							>
								<div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
									<Link
										href={project.link}
										className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
									></Link>
									<Image
										width={project.thumbnail.width}
										height={project.thumbnail.height}
										src={project.thumbnail.src}
										alt={project.thumbnail.alt}
										className="h-52 w-full rounded-t-3xl object-top"
									/>
									<div className="p-5 text-sm font-bold">
										<h6 className="mb-1 text-black dark:text-white">
											{project.title}
										</h6>
										<p>{project.tag}</p>
									</div>
								</div>
							</div>
						) : null
					)}
				</div>
			</div>
		</section>
	);
};

export default PortfolioProjects;
