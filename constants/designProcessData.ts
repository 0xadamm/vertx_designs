export interface DesignProcessProps {
	title: string;
}

export interface DesignProcessStep {
	id: number;
	title: string;
	description: string;
}

export const designProcessSteps: DesignProcessStep[] = [
	{
		id: 1,
		title: "Define",
		description:
			"We begin by collaborating with you to develop a detailed set of design & technical specifications. These serve as a comprehensive roadmap, guiding us through the subsequent stages of the web design process.",
	},
	{
		id: 2,
		title: "Wireframe",
		description:
			"Wireframes provide the first visualization of your website, offering a basic representation of the site's layout. Although not as intricate as the final design, wireframes help establish the overall structure and organization of your website.",
	},
	{
		id: 3,
		title: "Prototype",
		description:
			"After finalizing wireframes, we create prototypes that add color and further detail. These refined visualizations allow us to establish a stronger understanding of the website's aesthetics and functionality before moving forward.",
	},
	{
		id: 4,
		title: "Copy & Graphics",
		description:
			"With prototypes approved, we initiate development in two parallel phases. Our team conducts SEO and competitive research to craft compelling copy and incorporate eye-catching visuals that enrich your website's content.",
	},
	{
		id: 5,
		title: "Development",
		description:
			"Simultaneously, we focus on the technical aspect of web design, deploying your CMS, crafting custom themes and page designs, and implementing analytics to monitor your site's performance.",
	},
	{
		id: 6,
		title: "Testing",
		description:
			"Upon completion of the design and development, our Quality Assurance team rigorously tests your website's performance, responsiveness, and compatibility across various web browsers and mobile devices to ensure a seamless user experience.",
	},
	{
		id: 7,
		title: "Deployment & Optimization",
		description:
			"Once we're confident in your website's readiness, we deploy it to your public domain and initiate a 3-month support process. This includes monthly site backups, updates to scripts and plugins for security and reliability, and requested layout and content revisions.",
	},
];
