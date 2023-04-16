// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Favicon  */}
				<link
					rel="icon"
					type="icon"
					href="/assets/images/favicon.png"
				/>
				{/* Fonts  */}
				<link
					href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="theme-color"
					content="#08111F"
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta
					name="apple-mobile-web-app-capable"
					content="yes"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
