/* eslint-disable max-len */
import Head from "next/head";
import Testimonial from "../components/Testimonial";
import SubHero from "../components/SubHero";
import WhoAreWe from "../components/WhoAreWe";
import HowItWorks from "../components/HowItWorks";

import ContactNow from "../components/ContactNow";
import { feedbacks } from "../constants/feedbacks";
import DesignProcess from "../components/DesignProcess";

const Aboutus = () => {
	return (
		<div>
			<Head>
				<title>About Us | Vertx Designs</title>
			</Head>

			{/*  Hero */}
			<SubHero
				title="About Us"
				subtitle="About Vertx Designs"
				image="/assets/images/aboutHero.png"
				height={300}
				width={300}
			/>
			<WhoAreWe />
			<HowItWorks />
			<DesignProcess title={"Our Design Process"} />
			<Testimonial feedbacks={feedbacks} />
			<ContactNow />
		</div>
	);
};

export default Aboutus;
