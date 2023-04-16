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
			"Vertx Designs  has consistently demonstrated a remarkable ability to transform complex data sets into meaningful, actionable insights that have significantly contributed to the success of our projects.",
	},
	{
		id: 2,
		name: "Jojo Ryder",
		role: "CEO Ryder Media",
		thumbnail: "/assets/images/jojo.jpg",
		message:
			"In addition to his technical expertise, Adam is a fantastic team player and possesses excellent communication skills, ensuring seamless collaboration with colleagues from various backgrounds and expertise levels.",
	},
];
