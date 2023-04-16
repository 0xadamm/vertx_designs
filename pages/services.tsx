/* eslint-disable max-len */
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import Testimonial from "../components/Testimonial";
import HowWeDoIt from "../components/HowWeDoIt";
import CoreServices from "../components/CoreServices";
import DesignProcess from "../components/DesignProcess";
import NewsletterForm from "../components/NewsletterForm";
import SubHero from "../components/SubHero";
import ContactNow from "../components/ContactNow";
import { feedbacks } from "../constants/feedbacks";

const Services = () => {
	return (
		<div>
			<Head>
				<title>Services | Vertx Designs</title>
			</Head>
			<SubHero
				title="Services"
				subtitle="Our Services"
				image="/assets/images/serviceHero.png"
				height={300}
				width={300}
			/>
			{/* <Expertise /> */}
			<CoreServices />
			<HowWeDoIt />
			<DesignProcess title={"Our Design Process"} />
			{/* <ProjectSlider title1="Our Projects" title2="Some of our finest work." /> */}
			{/* <LogoSlider /> */}
			<Testimonial feedbacks={feedbacks} />
			<ContactNow />
		</div>
	);
};

export default Services;
