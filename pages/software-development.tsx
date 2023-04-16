import React from "react";
import SubHero from "../components/SubHero";
import Expertise from "../components/Expertise";
import ServiceDetailRtl from "../components/ServiceDetailRtl";
import ServiceDetailLtr from "../components/ServiceDetailLtr";
import Head from "next/head";
import SoftwareHero from "../components/SoftwareHero";
import OurApps from "../components/OurApps";
import SoftwareServices from "../components/SoftwareServices";
import CoreTech from "../components/CoreTech";
import logos from "../constants/logos";
import ContactNow from "../components/ContactNow";

const SoftwareDevelopment = () => {
	return (
		<>
			<Head>
				<title>Software Development | Vertx Designs</title>
			</Head>
			<SoftwareHero />

			<Expertise />
			<CoreTech logos={logos} />
			<OurApps />
			<SoftwareServices />
			<ServiceDetailRtl
				title="Software Development"
				subtitle={"Web Applications"}
				subdescription={
					"We build responsive web applications to solve your complex business problems. Our teams work with all modern frameworks, ensuring seamless experiences across devices, and integration with back-end data sources."
				}
				linkPath={""}
				image={"/assets/images/webApplications.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				title="Software Development"
				subtitle={"Mobile Applications"}
				subdescription={
					"Our mobile app development team crafts intuitive, feature-rich, and high-performance mobile applications for both iOS and Android platforms. Leveraging cutting-edge technologies and agile development methodologies, we ensure your mobile app stands out in the competitive market while providing an engaging user experience."
				}
				linkPath={""}
				image={"/assets/images/mobileApplications.png"}
				imageAlt={""}
			/>
			<ServiceDetailRtl
				title="Software Development"
				subtitle={"E-commerce Store"}
				subdescription={
					"Our e-commerce solutions help businesses of all sizes launch, manage, and grow successful online stores. We provide end-to-end e-commerce services, including platform selection, custom design, payment gateway integration, inventory management, and digital marketing, to ensure your online store drives sales and enhances customer satisfaction."
				}
				linkPath={""}
				image={"/assets/images/eccommerceStore.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				title="Software Development"
				subtitle={"API & System Integration"}
				subdescription={
					"Our API and system integration services enable seamless communication between your software applications and third-party systems. We ensure data consistency, streamlined workflows, and improved efficiency by connecting disparate systems, automating data exchange, and synchronizing processes across your organization."
				}
				linkPath={""}
				image={"/assets/images/apiSystems.png"}
				imageAlt={""}
			/>
			<ServiceDetailRtl
				title="Software Development"
				subtitle={"Content Managment Systems"}
				subdescription={
					"We develop powerful and easy-to-use content management systems (CMS) that enable you to manage your website content effortlessly. Our CMS solutions are built on popular platforms such as WordPress, Drupal, and Joomla, and are customized to fit your unique requirements, empowering you to keep your website up-to-date and engaging."
				}
				linkPath={""}
				image={"/assets/images/contentManagementSystem.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				title="Software Development"
				subtitle={"Databases"}
				subdescription={
					"Our database development and management services ensure your data is secure, accessible, and well-organized. We design and implement custom database solutions that optimize data storage, retrieval, and processing, enabling your business to leverage data-driven insights and make informed decisions."
				}
				linkPath={""}
				image={"/assets/images/database.png"}
				imageAlt={""}
			/>
			<ContactNow />
		</>
	);
};

export default SoftwareDevelopment;
