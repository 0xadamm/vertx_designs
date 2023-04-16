/* eslint-disable max-len */
import Link from "next/link";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Head from "next/head";
import Image from "next/image";
import DesignExpertise from "../components/DesignExpertise";
import ServiceDetailRtl from "../components/ServiceDetailRtl";
import ServiceDetailLtr from "../components/ServiceDetailLtr";
import ContactNow from "../components/ContactNow";

const ProductDesign = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<div>
			<Head>
				<title>Product Design | Vertx Designs</title>
			</Head>
			{/* <ServiceDetailHero /> */}
			<div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
				<div className="relative">
					<div className="container">
						<div className="relative items-center py-14 lg:flex lg:py-[100px]">
							<div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-3/5">
								<h2 className="text-4xl font-black sm:text-5xl sm:leading-[126px] xl:text-[100px]">
									<span className="text-secondary">Product </span>
									<span className="text-primary">Design</span>
								</h2>
								<p className="my-8 text-xl leading-[40px] text-[#7780A1]">
									The Vertx Lab team manages the entire process of
									mobile & and website design services. We are
									committed to delivering high-quality applications
									and websites, ensuring exceptional functionality
									and UI/UX
								</p>
								<Link
									href="https://calendly.com/vertxlabs-adam/introduction"
									target="_blank"
									className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto"
								>
									Book a free consultation
								</Link>
							</div>
							<div
								className="top-[100px] mt-10 h-96 w-auto ltr:right-0 rtl:left-0 lg:absolute lg:mt-0 lg:h-auto lg:w-2/5"
								data-aos={isRtl ? "fade-right" : "fade-left"}
								data-aos-duration="1000"
							>
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
			</div>
			{/* <Expertise /> */}
			<DesignExpertise />
			<ServiceDetailRtl
				id="user-research"
				subtitle={"User Research"}
				subdescription={
					"User research is a crucial step in the UX/UI design process, where we gather insights about the needs, preferences, and behaviors of your target audience. By employing a variety of qualitative and quantitative methods, such as interviews, surveys, and observations, we gain a deep understanding of your users, enabling us to create tailored and effective design solutions that enhance the user experience."
				}
				linkPath={""}
				linkText={"Read More"}
				image={"/assets/images/userResearchImage.png"}
				imageAlt={"User Interface Design"}
			/>
			<ServiceDetailLtr
				id="information-architecture"
				subtitle={"Information Architecture"}
				subdescription={
					"Information architecture (IA) is the backbone of any well-structured website or application. It involves organizing and structuring content in a clear, intuitive, and user-friendly manner. Our IA process involves creating site maps, hierarchies, and navigation systems that ensure seamless user journeys and easy access to the information they seek, ultimately improving user satisfaction and engagement."
				}
				linkPath={""}
				image={"/assets/images/infoArchitectureImage.png"}
				imageAlt={"Information Architecture"}
			/>
			<ServiceDetailRtl
				id="persona-research"
				subtitle={"Persona Research"}
				subdescription={
					"Persona research is an essential aspect of UX/UI design that helps us identify and understand your target audience's distinct characteristics, goals, and motivations. By creating detailed and realistic user personas, we can empathize with their needs and expectations, enabling us to design tailored solutions that resonate with your users and drive user engagement."
				}
				linkPath={""}
				image={"/assets/images/personaResearchImage.png"}
				imageAlt={"Persona Research"}
			/>
			<ServiceDetailLtr
				id="user-interface"
				subtitle={"User Interface Design"}
				subdescription={
					"User Interface (UI) design is the visual and interactive aspect of a digital product, focusing on creating aesthetically pleasing and functional interfaces that cater to user needs. Our UI design process combines appealing visual elements, clear layouts, and intuitive navigation systems to provide a seamless and enjoyable user experience, ensuring that your users feel comfortable and engaged while using your product."
				}
				linkPath={""}
				image={"/assets/images/userInterfaceImage.png"}
				imageAlt={"User Interface Design"}
			/>
			<ServiceDetailRtl
				id="accessibility"
				subtitle={"Access & Usability"}
				subdescription={
					"Accessibility and usability are fundamental principles of UX/UI design that ensure your digital product is user-friendly and easily accessible to all users, including those with disabilities. We strive to create designs that comply with accessibility guidelines, such as the Web Content Accessibility Guidelines (WCAG), to provide a smooth and inclusive user experience. Our focus on usability ensures that your product is efficient, effective, and satisfying for all users."
				}
				linkPath={""}
				image={"/assets/images/accessUsabilityImage.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				id="user-testing"
				subtitle={"User Testing"}
				subdescription={
					"User testing is a vital step in the design process that enables us to validate and refine our design solutions based on real user feedback. By conducting usability tests, we can identify potential issues, assess the effectiveness of our designs, and gather valuable insights to improve the overall user experience. This iterative process ensures that the final product not only meets but exceeds user expectations."
				}
				linkPath={""}
				image={"/assets/images/userTestingImage.png"}
				imageAlt={""}
			/>
			<ContactNow />
		</div>
	);
};

export default ProductDesign;
