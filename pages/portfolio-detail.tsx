/* eslint-disable max-len */
import Head from "next/head";
import PortfolioDetailHero from "../components/PortfolioDetailHero";
import PortfolioDetailFeatures from "../components/PortfolioDetailFeatures";

const Portfoliodetail = () => {
	return (
		<div>
			<Head>
				<title>Portfolio Details | Vertx Designs</title>
			</Head>
			<PortfolioDetailHero />
			<PortfolioDetailFeatures />
			{/* <ProjectSlider title2="Related Projects" /> */}
		</div>
	);
};

export default Portfoliodetail;
