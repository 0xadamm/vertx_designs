/* eslint-disable max-len */
import { useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import Testimonial from "../components/Testimonial";
import { IRootState } from "../store";
import SubHero from "../components/SubHero";
import WhoAreWe from "../components/WhoAreWe";
import HowItWorks from "../components/HowItWorks";
import Growth from "../components/Growth";
import NewsletterForm from "../components/NewsletterForm";
import ContactNow from "../components/ContactNow";
import { feedbacks } from "../constants/feedbacks";

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
			{/* <Growth /> */}
			<Testimonial feedbacks={feedbacks} />
			<ContactNow />
		</div>
	);
};

export default Aboutus;
