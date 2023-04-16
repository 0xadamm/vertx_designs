export type Feedback = {
	id: number;
	name: string;
	role: string;
	thumbnail: string;
	message: string;
};

export const feedbacks = [
	{
		id: 1,
		name: "Truth",
		role: "Head of Strategic Marketing Raycon Global",
		thumbnail: "/assets/images/truth.jpg",
		message:
			"Vertx Designs consistently showcases exceptional skills in transforming complex data sets into meaningful, actionable insights. Their expertise has been invaluable in driving the success of numerous projects for our company. Their team's dedication and professionalism set them apart as a top-notch agency.",
	},
	{
		id: 2,
		name: "Jojo Ryder",
		role: "CEO Ryder Media",
		thumbnail: "/assets/images/jojo.jpg",
		message:
			"In addition to their technical expertise, the team at Vertx Designs excels in collaboration and communication, ensuring seamless interactions with colleagues from various backgrounds and expertise levels. Their ability to work effectively as a team has consistently contributed to the success of our projects and fostered a strong working relationship with our organization.",
	},
];
