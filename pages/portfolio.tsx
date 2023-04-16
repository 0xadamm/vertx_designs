/* eslint-disable max-len */
import Head from "next/head";
import Testimonial from "../components/Testimonial";
import ContactNow from "../components/ContactNow";
import PortfolioProjects from "../components/PortfolioProjects";
import SubHero from "../components/SubHero";
import { feedbacks } from "../constants/feedbacks";

const Portfolio = () => {
	// const [activeTab, setActiveTab] = useState<string>('all');
	// const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

	return (
		<div>
			<Head>
				<title>Portfolio | Vertx Designs</title>
			</Head>
			<div>
				<SubHero
					title="Our Projects"
					subtitle="Some of our finest Work"
					image="/assets/images/portfolioHero.png"
					height={300}
					width={300}
				/>
				<PortfolioProjects />
				<Testimonial feedbacks={feedbacks} />
				<ContactNow />
			</div>
		</div>
	);
};

export default Portfolio;
