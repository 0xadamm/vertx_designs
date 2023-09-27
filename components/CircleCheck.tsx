type CrircleCheckProps = {
	isActive: boolean;
};

const CircleCheck: React.FC<CrircleCheckProps> = ({ isActive }) => {
	const activeColor = "#45B649";
	const inactiveColor = "#7780A1";
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="8"
				cy="8"
				r="8"
				fill={isActive ? activeColor : inactiveColor}
			/>
			<path
				d="M5.11438 8.11438L7 10L10.7712 6.22876"
				stroke="white"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default CircleCheck;
