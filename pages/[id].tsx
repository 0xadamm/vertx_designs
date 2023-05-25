import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import CoreTech from "../components/CoreTech";
import logos from "../constants/logos";
import { PROJECTS } from "../constants/projects";
import ProjectSlider from "../components/ProjectSlider";

const Portfoliodetail = () => {
	const router = useRouter();
	const { id } = router.query;

	const project = PROJECTS.find(project => project.id === id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div>
			<Head>
				<title>Portfolio Details | Vertx Designs</title>
			</Head>
			{/* <PortfolioDetailHero /> */}
			<div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
				<div className="relative">
					<div className="container">
						<div className="items-center py-10 md:flex md:h-[400px] md:py-0">
							<div className="heading relative mb-0 md:w-[725px]">
								<h1 className="!text-white">{project.title}</h1>
								<p className="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0">
									{project.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <PortfolioDetailFeatures /> */}
			<section className="py-14 md:py-[100px]">
				<div className="container">
					{/* <!--  Technologies --> */}
					<CoreTech
						logos={logos}
						title="Technologies"
					/>

					{/* <!-- Features and Functionalities --> */}
					<div className="py-14 md:py-20">
						<h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
							Features and Functionalities
						</h3>
						<ul className="list-disc space-y-4 font-semibold leading-6 ltr:ml-[18px] rtl:mr-[18px] md:text-lg ltr:md:pl-4 rtl:md:pr-4">
							{project.features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>

					{/* Description */}
					<div className="pb-14 md:pb-20">
						<h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
							Description
						</h3>
						<p className="relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg">
							{project.subdescription}
						</p>
					</div>

					{/* <!-- Images -->  */}
					<div className="grid gap-[30px] sm:grid-cols-2">
						{project.imagesrc1 && (
							<Image
								width={540}
								height={800}
								src={project.imagesrc1}
								alt="portfolio-img-1"
								className="rounded-[32px]"
								data-aos="fade-up"
								data-aos-duration="1000"
							/>
						)}
						{project.imagesrc2 && (
							<Image
								width={540}
								height={415}
								src={project.imagesrc2}
								alt="portfolio-img-2"
								className="rounded-[32px]"
								data-aos="fade-up"
								data-aos-duration="1000"
							/>
						)}
					</div>
					<div className="py-[30px] sm:py-[50px]">
						{project.imagesrc3 && (
							<Image
								width={1110}
								height={500}
								src={project.imagesrc3}
								alt="portfolio-img-3"
								className="rounded-[32px]"
								data-aos="fade-up"
								data-aos-duration="1000"
							/>
						)}
					</div>
					<div>
						{project.imagesrc4 && (
							<Image
								width={1110}
								height={800}
								src={project.imagesrc4}
								alt="portfolio-img-4"
								className="rounded-[32px]"
								data-aos="fade-up"
								data-aos-duration="1000"
							/>
						)}
					</div>
				</div>
			</section>
			<ProjectSlider title2="Our Projects" />
		</div>
	);
};

export default Portfoliodetail;
