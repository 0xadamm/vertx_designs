import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

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
				{/* Global site tag (gtag.js) - Google Analytics */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
					strategy="afterInteractive"
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
				>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){window.dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', '${process.env.GOOGLE_ANALYTICS}');
						// console.log('google analytics script is running')
						`}
				</Script>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
