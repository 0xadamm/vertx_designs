import Head from "next/head";
import MarketingHero from "../components/MarketingHero";
import MarketingServices from "../components/MarketingServices";
import ServiceDetailLtr from "../components/ServiceDetailLtr";
import ServiceDetailRtl from "../components/ServiceDetailRtl";
import ContactNow from "../components/ContactNow";

const DigitalMarketing = () => {
	return (
		<>
			<Head>
				<title>Digital Marketing | Vertx Designs</title>
			</Head>
			<MarketingHero />;
			<MarketingServices />;
			<ServiceDetailRtl
				title="Digital Marketing"
				subtitle={"Campaign Strategy"}
				subdescription={
					"Campaign Strategy involves the systematic gathering, analysis, and interpretation of data about your target market, customers, competitors, and industry trends. Market research is crucial for understanding your audience, identifying opportunities, and making data-driven decisions to optimize your marketing strategy."
				}
				linkPath={""}
				image={"/assets/images/campaignStrategy.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				title="Digital Marketing"
				subtitle={"Brand Discovery"}
				subdescription={
					"Branding is the process of creating a strong, unique, and memorable image and identity for your business. This includes designing a logo, selecting colors and fonts, developing a brand voice, and crafting a compelling brand story. A consistent and powerful brand identity helps you stand out from competitors and fosters customer loyalty."
				}
				linkPath={""}
				image={"/assets/images/brandDiscovery.png"}
				imageAlt={""}
			/>
			<ServiceDetailRtl
				title="Digital Marketing"
				subtitle={"Search Engine Optimization"}
				subdescription={
					"SEO involves optimizing your website's content, structure, and technical aspects to improve its visibility in search engine results. This includes keyword research, on-page optimization, link building, and more. PPC advertising, such as Google Ads, involves bidding on keywords to have your ads displayed in search results. Both strategies help drive targeted traffic to your website and increase conversions."
				}
				linkPath={""}
				image={"/assets/images/searchEngineOptimization.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				title="Digital Marketing"
				subtitle={"HubSpot CRM"}
				subdescription={
					"HubSpot CRM is a powerful, user-friendly customer relationship management (CRM) system designed to help businesses of all sizes streamline their sales, marketing, and customer service processes. With its robust suite of tools and integrations, HubSpot CRM enables organizations to effectively manage, track, and nurture leads and customer relationships, ultimately driving growth and improving customer satisfaction."
				}
				linkPath={""}
				image={"/assets/images/hubSpot.png"}
				imageAlt={""}
			/>
			<ServiceDetailRtl
				title="Digital Marketing"
				subtitle={"Content Creation"}
				subdescription={
					"Content creation is the process of planning, producing, and distributing valuable, relevant, and engaging information in various formats to attract, inform, and retain a target audience. The primary goal of content creation is to build brand awareness, drive website traffic, generate leads, and ultimately convert those leads into customers. Types of content can include blog posts, articles, videos, podcasts, social media updates, infographics, ebooks, whitepapers, case studies, and webinars."
				}
				linkPath={""}
				image={"/assets/images/contentCreation.png"}
				imageAlt={""}
			/>
			<ServiceDetailLtr
				title="Digital Marketing"
				subtitle={"Social Media Marketing"}
				subdescription={
					"Social media marketing involves using platforms like Facebook, Instagram, Twitter, LinkedIn, and Pinterest to promote your brand, products, or services. By creating and sharing engaging content, running targeted ads, and interacting with your audience, social media marketing helps increase brand visibility, drive website traffic, and generate leads."
				}
				linkPath={""}
				image={"/assets/images/socialMediaMarketing.png"}
				imageAlt={""}
			/>
			<ContactNow />
		</>
	);
};

export default DigitalMarketing;
