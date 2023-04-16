import Head from "next/head";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import SubHero from "../components/SubHero";
import ContactNow from "../components/ContactNow";
import { queries } from "../constants/queries";

const Contactus = () => {
	return (
		<div>
			<Head>
				<title>Contact Us | Vertx Designs</title>
			</Head>
			<SubHero
				title="Contact Us"
				subtitle="Reach Out To Us Anytime!"
				image="/assets/images/contactHero.png"
				height={350}
				width={300}
			/>
			<ContactForm />
			<Faq
				showTitle={false}
				queries={queries}
			/>
			<ContactNow />
		</div>
	);
};

export default Contactus;
