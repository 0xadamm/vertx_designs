/* eslint-disable max-len */
import Hero from "../components/Hero";
import CoreServices from "../components/CoreServices";
import WhatMakesDifferent from "../components/WhatMakesDifferent";
import Testimonial from "../components/Testimonial";
import ContactNow from "../components/ContactNow";
import { feedbacks } from "../constants/feedbacks";
import Pricing from "../components/Pricing";
import Head from "next/head";
import NewsletterForm from "../components/NewsletterForm";

const Index = () => {
	return (
		<div className="overflow-x-hidden">
			<Head>
				<title>Vertx Designs</title>
			</Head>
			<Hero />
			<CoreServices />
			{/* <Pricing
				title="Pricing Plan"
				subtitle="Choose Affordable Prices"
				firstPackageTitle="Starter"
				deliverable1="Resposive Design (up to 5 pages)"
				deliverable2="Custom Email & Contact Form"
				deliverable3="Domain & Hosting for One Year"
				deliverable4="Google Analytics Integration"
				deliverable5="Google Analytics Integration"
				firstPackagePrice="$1,495"
				secondPackageTitle="Business"
				deliverable6="Social Media Marketing"
				deliverable7="SEO: Search Engine Optimization"
				deliverable8="Paid Advertising"
				deliverable9="Normal Support"
				deliverable10="Advanced Analytic"
				secondPricePackage="$2999"
				thirdPackageTitle="Enterprise"
				deliverable11="Social Media Marketing"
				deliverable12="SEO: Search Engine Optimization "
				deliverable13="Paid Advertising"
				deliverable14="Normal Support"
				deliverable15="Advanced Analytics"
				thirdPricePackage="$11,999"
			/> */}
			<WhatMakesDifferent />
			<Testimonial feedbacks={feedbacks} />
			<NewsletterForm newsletterHeading="Stay Ahead in AI: Subscribe to Our Newsletter for Exclusive Insights and Updates!" />
			{/* <ContactNow /> */}
		</div>
	);
};

export default Index;
