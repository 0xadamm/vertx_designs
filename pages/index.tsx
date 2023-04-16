/* eslint-disable max-len */
import Hero from "../components/Hero";
import CoreServices from "../components/CoreServices";
import WhatMakesDifferent from "../components/WhatMakesDifferent";
import Testimonial from "../components/Testimonial";
import ContactNow from "../components/ContactNow";
import { feedbacks } from "../constants/feedbacks";

const Index = () => {
	return (
		<div className="overflow-x-hidden">
			<Hero />
			<CoreServices />
			<WhatMakesDifferent />
			<Testimonial feedbacks={feedbacks} />
			<ContactNow />
		</div>
	);
};

export default Index;
