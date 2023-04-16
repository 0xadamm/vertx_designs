import { useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import { IRootState } from "../store";

const Blog = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<div>
			<Head>
				<title>Blog | Vertx Designs</title>
			</Head>
			<div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
				<div className="relative">
					<div className="container">
						<div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
							<div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
								<h6>Blog</h6>
								<h4 className="!text-white">
									Unlock the latest trends/news
								</h4>
							</div>
							<div
								className="relative mt-6 md:mt-0"
								data-aos={isRtl ? "fade-right" : "fade-left"}
								data-aos-duration="1000"
							>
								<svg
									width="273"
									height="282"
									viewBox="0 0 273 282"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="mx-auto rtl:rotate-y-180 md:mx-0"
								>
									<path
										d="M189.028 66.2347C179.007 64.8906 167.385 63.5186 167.385 63.5186C169.652 63.8266 170.828 68.6147 170.072 74.1868C169.316 79.7589 166.852 84.0415 164.585 83.7335C163.129 83.5375 162.121 81.4655 161.785 78.5254C160.385 78.8334 158.957 79.0869 157.501 79.3389C157.501 79.3389 164.529 90.1737 158.117 92.6097C152.545 94.7098 139.805 83.9575 139.805 83.9575C124.363 91.6724 94.4367 97.6631 78.4336 100.802C82.5069 100.13 86.8441 119.753 82.8547 120.749C101.502 117.389 121.83 112.573 139.245 104.902C142.269 109.409 148.177 114.729 148.849 120.273C156.577 122.041 165.901 121.813 170.688 118.621C172.899 104.006 172.088 97.2519 170.324 93.1417C176.558 92.2585 182.641 90.5347 188.412 88.0176C203.704 81.5583 200.031 67.7408 189.028 66.2347Z"
										fill="#B476E5"
									/>
									<path
										d="M159.49 162.807L157.026 162.555L156.102 164.935L153.946 164.493L145.293 182.3C143.83 185.318 141.254 187.652 138.105 188.811C134.957 189.971 131.482 189.864 128.411 188.516L105.59 177.512L94.4194 183.812C92.7114 196.888 102.706 221.891 119.394 229.927L156.746 208.983C159.434 199.156 163.158 185.352 163.606 183.504C160.843 169.655 160.439 167.67 159.49 162.807Z"
										fill="#B476E5"
									/>
									<path
										d="M161.758 78.2734C162.458 85.2175 166.406 85.5536 168.84 79.0589C166.453 79.1615 164.064 78.8966 161.758 78.2734Z"
										fill="#47BDFF"
									/>
									<path
										d="M166.376 63.6262L166.236 65.5022C166.516 66.0342 168.478 66.4822 169.764 66.5102C169.176 64.4706 168.008 62.9306 166.376 63.6262Z"
										fill="#47BDFF"
									/>
									<path
										d="M191.268 66.7947C197.091 68.9787 203.447 76.5389 193.928 84.6575C191.383 86.6708 188.5 88.2174 185.416 89.2261C187.383 98.2257 190.145 107.033 193.669 115.545C206.828 108.517 220.436 105.158 232.223 105.376C216.187 82.0476 200.227 66.8507 191.268 66.7947Z"
										fill="#47BDFF"
									/>
									<path
										d="M180.798 193.659C180.518 194.415 180.238 195.171 179.93 195.955L182.562 194.499C181.974 194.247 181.386 193.967 180.798 193.659Z"
										fill="#47BDFF"
									/>
									<path
										d="M258.721 152.416C252.812 162.585 242.872 172.492 230.021 180.108C236.973 189.378 258.192 215.33 268.211 209.704C276.219 205.194 271.823 181.507 258.721 152.416Z"
										fill="#47BDFF"
									/>
									<path
										d="M76.9746 103.25C78.1226 102.858 80.2787 102.071 80.4187 102.046C78.7386 99.9459 77.4226 100.646 76.9746 103.25Z"
										fill="#47BDFF"
									/>
									<path
										d="M132.195 45.6557C129.164 45.6529 126.194 46.5034 123.625 48.1096C121.055 49.7158 118.989 52.013 117.664 54.7382C116.603 53.6627 115.256 52.9149 113.782 52.5842C112.308 52.2534 110.771 52.3536 109.352 52.8728C107.934 53.392 106.695 54.3082 105.783 55.5122C104.871 56.7162 104.324 58.1571 104.209 59.6631C104.093 61.1692 104.413 62.6767 105.131 64.0057C105.848 65.3348 106.933 66.4295 108.256 67.159C109.578 67.8886 111.083 68.2223 112.59 68.1203C114.097 68.0183 115.542 67.485 116.755 66.5839C117.53 69.0926 118.905 71.3745 120.761 73.2317C122.617 75.0889 124.898 76.4653 127.406 77.2417C129.914 78.0182 132.574 78.1712 135.155 77.6873C137.736 77.2035 140.159 76.0975 142.216 74.4653C141.943 73.8751 141.585 73.3287 141.152 72.8443C140.978 72.6116 140.747 72.4282 140.48 72.3123C135.104 71.7228 135.524 66.8241 138.632 67.8602C140.116 68.3642 140.48 68.0562 140.253 67.2707C138.573 63.1266 140.449 53.3544 148.345 62.3146C148.41 60.1519 148.042 57.9982 147.259 55.9809C146.478 53.9635 145.299 52.1237 143.793 50.5703C142.287 49.0168 140.484 47.7814 138.492 46.9373C136.5 46.0931 134.358 45.6573 132.195 45.6557Z"
										fill="#47BDFF"
									/>
									<path
										d="M19.6607 135.141C17.4208 134.771 15.128 134.881 12.9336 135.463C10.7392 136.045 8.69329 137.086 6.93102 138.517C5.16876 139.948 3.73021 141.737 2.71037 143.765C1.69053 145.793 1.11264 148.015 1.01489 150.283C0.917122 152.552 1.30172 154.814 2.14325 156.923C2.98479 159.031 4.26419 160.937 5.89677 162.514C7.52935 164.092 9.47804 165.305 11.6142 166.074C13.7503 166.842 16.0253 167.149 18.2886 166.973C16.1899 156.405 16.6603 145.49 19.6607 135.141Z"
										fill="#47BDFF"
									/>
									<path
										d="M84.2253 118.448C83.1613 118.812 82.0147 119.176 80.7812 119.512C82.4333 121.561 83.7493 121.001 84.2253 118.448Z"
										fill="#47BDFF"
									/>
									<path
										d="M55.5619 166.892C65.4051 160.795 76.0042 156.013 87.0891 152.668C85.8875 152.011 84.7447 151.252 83.673 150.4C70.3888 152.56 57.7309 157.575 46.5723 165.1C49.5355 165.855 52.5361 166.452 55.5619 166.892Z"
										fill="#47BDFF"
									/>
									<path
										d="M149.97 228.463C148.738 230.927 147.759 232.663 147.786 232.803C150.242 245.846 154.951 258.364 161.702 269.793C162.595 267.229 163.325 264.61 163.886 261.953C159.854 254.166 152.63 235.491 149.97 228.463Z"
										fill="#47BDFF"
									/>
									<path
										d="M144.622 102.385L142.69 109.326C141.429 107.786 140.197 106.302 139.273 104.905C141.065 104.09 142.858 103.25 144.622 102.385Z"
										fill="#47BDFF"
									/>
									<path
										d="M146.414 75.2508L150.983 77.7429C150.336 76.8497 149.801 75.8812 149.387 74.8588C148.423 75.1442 147.419 75.2765 146.414 75.2508Z"
										fill="#47BDFF"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M181.184 41.4562C185.087 40.1969 188.526 37.8088 191.071 34.594C192.763 32.4607 194.019 30.0146 194.765 27.3955C195.51 24.7766 195.731 22.0362 195.417 19.3314C195.102 16.6265 194.258 14.0104 192.93 11.6327C191.602 9.255 189.819 7.16245 187.682 5.47492C184.468 2.93054 180.57 1.39659 176.483 1.06706C172.397 0.737505 168.304 1.62719 164.723 3.62357C161.142 5.61995 158.234 8.63338 156.366 12.2827C154.497 15.9321 153.753 20.0536 154.227 24.1259C154.702 28.1984 156.371 32.0388 159.029 35.1614C161.686 38.2841 165.208 40.5489 169.151 41.6693C173.095 42.7898 177.283 42.7157 181.184 41.4562ZM176.819 18.3272L174.859 14.0431L185.891 18.2726L181.859 29.4154L179.759 24.7953C179.759 24.7953 168.337 30.7594 163.744 19.1392C166.152 25.2433 176.819 18.3272 176.819 18.3272Z"
										fill="#47BDFF"
									/>
									<path
										d="M237.046 240.503C237.046 243.676 236.104 246.778 234.341 249.417C232.579 252.055 230.072 254.111 227.141 255.325C224.21 256.54 220.984 256.858 217.871 256.239C214.759 255.62 211.9 254.092 209.655 251.847C207.412 249.603 205.884 246.744 205.265 243.631C204.646 240.519 204.964 237.293 206.179 234.362C207.393 231.431 209.45 228.924 212.088 227.161C214.728 225.399 217.83 224.458 221.003 224.458C225.256 224.464 229.334 226.156 232.342 229.164C235.349 232.172 237.041 236.25 237.046 240.503Z"
										fill="#47BDFF"
									/>
									<path
										d="M132.195 45.6557C129.164 45.6529 126.194 46.5034 123.625 48.1096C121.055 49.7158 118.989 52.013 117.664 54.7382C116.603 53.6627 115.256 52.9149 113.782 52.5842C112.308 52.2534 110.771 52.3536 109.352 52.8728C107.934 53.392 106.695 54.3082 105.783 55.5122C104.871 56.7162 104.324 58.1571 104.209 59.6631C104.093 61.1692 104.413 62.6767 105.131 64.0057C105.848 65.3348 106.933 66.4295 108.256 67.159C109.578 67.8886 111.083 68.2223 112.59 68.1203C114.096 68.0183 115.542 67.485 116.755 66.5839C117.53 69.0926 118.905 71.3745 120.761 73.2317C122.617 75.0889 124.898 76.4653 127.406 77.2417C129.914 78.0182 132.574 78.1712 135.155 77.6873C137.736 77.2035 140.159 76.0975 142.216 74.4653C141.943 73.8751 141.585 73.3287 141.152 72.8443C140.978 72.6116 140.747 72.4282 140.48 72.3123C135.104 71.7228 135.524 66.8241 138.632 67.8602C140.116 68.3642 140.48 68.0562 140.253 67.2707C138.573 63.1266 140.449 53.3544 148.345 62.3146C148.41 60.1519 148.042 57.9982 147.259 55.9809C146.478 53.9635 145.299 52.1237 143.793 50.5703C142.287 49.0168 140.484 47.7814 138.492 46.9373C136.5 46.0931 134.358 45.6573 132.195 45.6557Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinejoin="round"
									/>
									<path
										d="M182.559 194.499C181.97 194.247 181.381 193.967 180.791 193.659"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M156.716 208.976L119.393 229.919C102.704 221.882 92.6817 196.879 94.3897 183.803L105.56 177.503"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M132.973 107.506C137.801 112.573 141.808 118.364 144.845 124.669"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M80.7543 220.986C70.8283 220.465 61.1414 217.749 52.3908 213.034C43.6403 208.32 36.0436 201.723 30.1479 193.721C24.252 185.719 20.2035 176.51 18.2938 166.755C16.3841 157.001 16.6606 146.944 19.1036 137.308C21.5464 127.674 26.0949 118.7 32.4217 111.034C38.7483 103.368 46.6959 97.1993 55.6923 92.9728C64.6888 88.7464 74.5102 86.5667 84.4499 86.5912C94.3897 86.6155 104.2 88.8432 113.176 93.1137"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M167.158 226.581L187.151 262.539C187.948 263.975 188.184 265.655 187.811 267.254C187.438 268.853 186.484 270.256 185.135 271.191C179.909 274.818 174.337 277.922 168.502 280.458C166.998 281.108 165.304 281.176 163.752 280.648C162.201 280.119 160.899 279.034 160.102 277.602L130.223 223.898"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M191.598 66.8035C200.643 67.2221 216.409 82.3645 232.229 105.35"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M258.717 152.388C271.82 181.479 276.185 205.188 268.208 209.676C258.069 215.379 231.955 188.168 209.858 148.916C197.122 126.291 188.489 104.594 185.387 89.1936"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M193.648 115.541C221.732 100.534 251.937 102.245 261.771 119.713C271.605 137.181 257.431 163.868 230.02 180.135"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M262.552 210.066L182.558 194.499L179.926 195.955"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M119.393 229.919L114.017 232.915C83.75 246.409 62.3871 201.807 91.1746 185.595L94.3947 183.803"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M177.716 91.6577L171.92 107.422"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M149.379 74.8588C149.379 74.8588 151.195 80.3514 155.315 79.7015C157.526 79.3537 159.683 78.9469 161.811 78.5225"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M139.803 83.9634C139.803 83.9634 152.543 94.7142 158.115 92.5876C164.498 90.1516 157.499 79.3153 157.499 79.3153"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M135.52 85.8056C141.148 90.4537 152.234 98.8759 160.104 96.2778C167.073 93.9773 164.752 84.5735 161.392 78.5549"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M76.9746 103.25C78.1226 102.858 80.2787 102.071 80.4187 102.046C78.7386 99.9459 77.4226 100.646 76.9746 103.25Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M166.374 63.6586C169.371 62.3706 170.912 68.1947 170.071 74.1868C169.288 79.7589 166.852 84.0386 164.584 83.7335C163.1 83.5361 162.064 81.3756 161.756 78.3309"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M167.383 63.4906C167.383 63.4906 179.025 64.8862 189.027 66.2066C200.189 67.6804 203.72 81.4802 188.411 87.9896C182.634 90.4871 176.552 92.2102 170.323 93.1137"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M164.586 83.7055H183.513"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M156.63 63.5746C156.347 62.4286 155.801 61.3645 155.034 60.4665C153.568 58.8793 153.938 68.0827 155.398 73.5708C156.291 76.9309 161.866 79.2814 168.837 79.0869"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M159.937 55.2024C160.301 53.1024 160.775 46.2614 158.593 52.7104C158.028 54.4501 157.587 56.228 157.276 58.0305C156.683 60.9876 156.466 64.0085 156.632 67.0201"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M166.291 65.5066C166.571 66.0387 168.475 66.4867 169.763 66.5147"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M164.053 60.8865C164.165 60.6345 164.893 59.0665 164.977 58.8425C166.745 55.0624 167.307 56.1279 166.683 60.6345C166.263 64.2506 166.039 67.8865 166.011 71.5268"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M161.027 61.8946C161.559 59.2419 162.511 55.7625 162.796 54.9785C164.756 49.4903 166.34 50.4409 165.154 55.9585C164.474 59.0931 163.894 61.3906 163.533 63.4906"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M163.045 54.3904C163.829 45.8237 161.164 50.1889 160.077 54.6984C159.563 56.7644 159.17 58.8587 158.898 60.9706"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M158.117 60.9735C159.334 61.1396 160.5 61.5683 161.535 62.2299C162.569 62.8916 163.448 63.7702 164.109 64.8052"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M62.784 111.202C62.784 111.202 59.8719 110.81 55.3918 110.25C50.6877 109.661 50.0157 107.715 55.4478 107.702C56.0373 107.702 61.9999 107.574 63.764 107.534C64.716 107.512 67.4262 107.17 67.4321 106.302C67.4453 103.866 62.7854 98.6387 64.52 97.4258C65.6415 96.6447 69.006 99.912 71.2107 102.298C71.8408 102.97 72.6542 103.442 73.5502 103.656C74.446 103.87 75.3849 103.816 76.2508 103.502C76.4188 103.443 80.1988 102.102 80.3668 102.046"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M64.0099 110.978C64.0099 110.978 53.7617 112.798 53.0897 112.909C47.7431 113.793 48.6936 115.573 53.4257 115.429C57.9338 115.293 63.447 115.205 63.447 115.205"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M65.1601 114.617C61.9589 115.721 58.6959 116.637 55.3879 117.361C50.0928 118.553 51.1878 120.109 55.9199 119.853C58.8421 119.769 61.7534 119.46 64.6281 118.929"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M67.3707 117.564C64.811 119.018 62.0844 120.157 59.2506 120.954C53.9879 122.416 55.189 123.888 60.0626 123.362C61.3786 123.214 62.5252 123.052 63.4787 122.886C66.2492 122.404 68.9933 121.934 71.7934 121.542C76.0182 120.847 80.1831 119.828 84.2507 118.491"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M63.7305 109.326C64.5705 114.029 66.5305 116.885 69.8891 120.301"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M67.623 108.038C69.0192 109.839 70.7756 111.33 72.7802 112.415C74.7849 113.499 76.9935 114.154 79.2654 114.337"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M139.256 104.918C142.283 109.422 148.178 114.736 148.848 120.273C156.576 122.041 165.899 121.813 170.687 118.621C174.077 96.1938 170.351 92.3017 167.047 87.9896"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M170.685 118.596C170.685 118.596 177.906 137.104 185.413 157.935C176.446 161.722 166.699 163.298 156.994 162.527"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M166.29 138.277L156.069 164.904C146.523 162.966 137.341 159.546 128.854 154.768C133.584 136.989 142.46 126.965 148.844 120.245"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M131.209 156.056C130.307 161.372 129.746 166.74 129.529 172.128"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M130.144 163.924C130.144 163.924 107.183 159.08 97.8046 156.784C88.4259 154.488 83.7204 150.428 83.7204 150.428C70.4366 152.588 57.7793 157.603 46.6211 165.128C70.5881 171.008 76.4402 164.036 88.3125 169.188L128.38 188.507C131.451 189.856 134.926 189.962 138.074 188.803C141.223 187.644 143.799 185.309 145.263 182.291L153.915 164.484"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M182.222 159.164C183.73 166.898 184.305 174.784 183.93 182.655C183.843 184.032 183.6 185.395 183.202 186.715C179.518 198.985 165.536 230.283 165.536 230.283C162.091 240.615 168.698 249.573 161.704 269.79C155.01 258.335 150.305 245.827 147.788 232.8C147.74 232.561 151.056 226.905 153.161 221.346C154.62 217.495 163.379 184.344 163.58 183.52L159.492 162.773"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M63.1139 228.83C62.0594 228.533 60.9304 228.667 59.9748 229.204C59.0194 229.739 58.3154 230.632 58.0178 231.686L57.5978 233.114L56.1697 232.694C55.1144 232.396 53.9844 232.531 53.0281 233.066C52.0718 233.603 51.3678 234.497 51.0707 235.553C50.7736 236.608 50.908 237.738 51.4441 238.695C51.9803 239.651 52.8744 240.354 53.9297 240.652L63.3099 243.304L65.9625 233.926C66.2591 232.872 66.1257 231.745 65.5916 230.788C65.0577 229.833 64.1665 229.129 63.1139 228.83Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M242.14 92.9531C241.589 93.3769 240.924 93.6277 240.232 93.674C239.537 93.7201 238.845 93.5597 238.244 93.2126C237.641 92.8657 237.154 92.3478 236.846 91.7246C236.538 91.1013 236.422 90.4009 236.512 89.7115C236.602 89.0221 236.895 88.375 237.352 87.852C237.81 87.3288 238.413 86.9533 239.085 86.7728C239.756 86.5922 240.466 86.6148 241.125 86.8378C241.783 87.0606 242.361 87.4738 242.784 88.025C243.067 88.3905 243.273 88.8081 243.394 89.2539C243.515 89.6997 243.546 90.165 243.486 90.6228C243.427 91.0807 243.276 91.5224 243.045 91.9222C242.815 92.3222 242.507 92.6725 242.14 92.9531Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18.0069 134.954C14.797 134.768 11.6051 135.55 8.84527 137.2C6.0853 138.85 3.88466 141.291 2.52849 144.206C1.17232 147.121 0.72322 150.376 1.23939 153.551C1.75556 156.724 3.21321 159.67 5.42331 162.005C7.63343 164.34 10.4942 165.958 13.6347 166.648C16.775 167.337 20.0504 167.069 23.036 165.875C26.0215 164.682 28.5796 162.618 30.3787 159.953C32.1778 157.288 33.1349 154.145 33.1257 150.929C33.1216 146.839 31.5533 142.906 28.7422 139.936C25.9311 136.966 22.0901 135.183 18.0069 134.954Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M84.2312 118.498C83.1672 118.862 82.0206 119.226 80.7871 119.562C82.4391 121.607 83.7552 121.046 84.2312 118.498Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M146.412 75.2789L150.948 77.7429"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M146.411 75.2788C146.411 75.2788 159.74 75.3068 148.343 62.3426C140.618 53.5224 138.655 62.711 140.148 66.9936C140.493 67.9839 140.329 68.4673 138.627 67.8867C135.519 66.8551 135.099 71.7507 140.475 72.3388C140.901 72.5785 141.265 72.9141 141.539 73.3188C144.929 78.8614 144.703 81.9975 138.515 84.5735C121.828 91.4897 107.156 95.1843 78.373 100.814C80.6367 100.298 82.9253 107.012 83.5001 109.302C84.1471 111.88 85.4159 120.134 82.8531 120.777C103.462 117.053 126.085 111.594 144.619 102.41L142.658 109.326"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M153.416 125.117C153.416 125.117 151.058 128.869 144.848 128.869"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M53.6211 62.9026L59.8652 76.4549"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M63.5086 66.5706L49.9844 72.8148"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M174.859 14.0431L176.819 18.3272C176.819 18.3272 166.152 25.2433 163.744 19.1392C168.336 30.7594 179.759 24.7953 179.759 24.7953L181.859 29.4154L185.891 18.2727L174.859 14.0431Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M191.071 34.594C188.526 37.8088 185.087 40.1969 181.184 41.4562C177.283 42.7157 173.095 42.7898 169.151 41.6693C165.208 40.5489 161.686 38.2841 159.029 35.1614C156.371 32.0388 154.702 28.1984 154.227 24.1259C153.753 20.0536 154.497 15.9321 156.366 12.2827C158.234 8.63338 161.142 5.61995 164.723 3.62357C168.304 1.62719 172.397 0.737505 176.483 1.06706C180.57 1.39659 184.468 2.93054 187.682 5.47492C189.819 7.16245 191.602 9.255 192.93 11.6327C194.258 14.0104 195.102 16.6265 195.417 19.3314C195.731 22.0362 195.51 24.7766 194.765 27.3955C194.019 30.0146 192.763 32.4607 191.071 34.594Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M221.198 244.477C221.666 244.442 222.134 244.545 222.544 244.775C222.952 245.005 223.284 245.351 223.496 245.77C223.708 246.188 223.792 246.66 223.736 247.126C223.68 247.593 223.487 248.03 223.182 248.387C222.875 248.744 222.472 249.002 222.021 249.128C221.568 249.254 221.089 249.245 220.643 249.099C220.196 248.953 219.804 248.677 219.514 248.309C219.225 247.941 219.05 247.493 219.014 247.025C218.976 246.401 219.181 245.785 219.589 245.309C219.997 244.833 220.575 244.535 221.198 244.477Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M226.941 234.455C227.408 234.419 227.877 234.522 228.286 234.752C228.695 234.982 229.026 235.329 229.238 235.747C229.451 236.166 229.535 236.637 229.479 237.103C229.423 237.57 229.23 238.008 228.924 238.364C228.618 238.721 228.214 238.979 227.763 239.106C227.311 239.231 226.832 239.222 226.385 239.076C225.939 238.93 225.547 238.655 225.256 238.286C224.968 237.918 224.792 237.47 224.757 237.003C224.717 236.378 224.923 235.76 225.332 235.284C225.738 234.808 226.316 234.511 226.941 234.455Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M214.646 233.867C215.113 233.831 215.582 233.934 215.991 234.164C216.4 234.394 216.731 234.741 216.943 235.159C217.156 235.578 217.24 236.049 217.184 236.515C217.128 236.982 216.935 237.42 216.63 237.776C216.323 238.133 215.919 238.391 215.468 238.518C215.016 238.643 214.537 238.634 214.09 238.488C213.644 238.342 213.252 238.067 212.961 237.698C212.673 237.33 212.497 236.882 212.462 236.415C212.422 235.788 212.628 235.172 213.037 234.696C213.443 234.22 214.021 233.923 214.646 233.867Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M217.195 236.051L224.783 237.003"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M222.348 244.673L225.764 238.739"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M237.046 240.503C237.046 243.676 236.104 246.778 234.341 249.417C232.579 252.055 230.072 254.111 227.141 255.325C224.21 256.54 220.984 256.858 217.871 256.239C214.759 255.62 211.9 254.092 209.655 251.847C207.412 249.603 205.884 246.744 205.265 243.631C204.646 240.519 204.964 237.293 206.179 234.362C207.393 231.431 209.45 228.924 212.088 227.161C214.728 225.399 217.83 224.458 221.003 224.458C225.256 224.464 229.334 226.156 232.342 229.164C235.349 232.172 237.041 236.25 237.046 240.503Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M55.5619 166.892C65.4051 160.795 76.0042 156.013 87.0891 152.668C85.8875 152.011 84.7447 151.252 83.673 150.4C70.3888 152.56 57.7309 157.575 46.5723 165.1C49.5355 165.855 52.5361 166.452 55.5619 166.892Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M149.97 228.463C148.738 230.927 147.759 232.663 147.786 232.803C150.242 245.846 154.951 258.364 161.702 269.793C162.595 267.229 163.325 264.61 163.886 261.953C159.854 254.166 152.63 235.491 149.97 228.463Z"
										stroke="white"
										strokeWidth="0.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="bg-gradient-to-t from-white/70 to-transparent py-14 dark:bg-none md:py-[100px]">
				<div className="container">
					<div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-1.png"
									alt="blog-1"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										UI/UX Design
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Simple & constructive methods to improve your
										visual/UI design
									</h5>
									<p className="line-clamp-4">
										Contrary to popular belief, Lorem Ipsum is not
										simply random text. It has roots in a piece of
										classical Latin literature from 45 BC, making it
										over 2000 years old.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-2.png"
									alt="blog-2"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										Project Management
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Why is JIRA important for managing projects?
									</h5>
									<p className="line-clamp-4">
										Jira works well for Agile development projects
										for many reasons, including the ability to create
										Kanban and Scrum boards with sprint planning and
										issue time estimation capabilities.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-3.png"
									alt="blog-3"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										SEO Marketing
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										What is SEO (Search Engine Optimization)?
									</h5>
									<p className="line-clamp-4">
										Search engine optimization is the process of
										improving the quality and quantity of website
										traffic to a website or a web page from search
										engines.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-1.png"
									alt="blog-1"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										UI/UX Design
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Simple & constructive methods to improve your
										visual/UI design
									</h5>
									<p className="line-clamp-4">
										Contrary to popular belief, Lorem Ipsum is not
										simply random text. It has roots in a piece of
										classical Latin literature from 45 BC, making it
										over 2000 years old.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-2.png"
									alt="blog-2"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										Project Management
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Why is JIRA important for managing projects?
									</h5>
									<p className="line-clamp-4">
										Jira works well for Agile development projects
										for many reasons, including the ability to create
										Kanban and Scrum boards with sprint planning and
										issue time estimation capabilities.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-3.png"
									alt="blog-3"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										SEO Marketing
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										What is SEO (Search Engine Optimization)?
									</h5>
									<p className="line-clamp-4">
										Search engine optimization is the process of
										improving the quality and quantity of website
										traffic to a website or a web page from search
										engines.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-1.png"
									alt="blog-1"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										UI/UX Design
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Simple & constructive methods to improve your
										visual/UI design
									</h5>
									<p className="line-clamp-4">
										Contrary to popular belief, Lorem Ipsum is not
										simply random text. It has roots in a piece of
										classical Latin literature from 45 BC, making it
										over 2000 years old.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-2.png"
									alt="blog-2"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										Project Management
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Why is JIRA important for managing projects?
									</h5>
									<p className="line-clamp-4">
										Jira works well for Agile development projects
										for many reasons, including the ability to create
										Kanban and Scrum boards with sprint planning and
										issue time estimation capabilities.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-3.png"
									alt="blog-3"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										SEO Marketing
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										What is SEO (Search Engine Optimization)?
									</h5>
									<p className="line-clamp-4">
										Search engine optimization is the process of
										improving the quality and quantity of website
										traffic to a website or a web page from search
										engines.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-1.png"
									alt="blog-1"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										UI/UX Design
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Simple & constructive methods to improve your
										visual/UI design
									</h5>
									<p className="line-clamp-4">
										Contrary to popular belief, Lorem Ipsum is not
										simply random text. It has roots in a piece of
										classical Latin literature from 45 BC, making it
										over 2000 years old.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-2.png"
									alt="blog-2"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										Project Management
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										Why is JIRA important for managing projects?
									</h5>
									<p className="line-clamp-4">
										Jira works well for Agile development projects
										for many reasons, including the ability to create
										Kanban and Scrum boards with sprint planning and
										issue time estimation capabilities.
									</p>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
								<Link
									href="/blog-details"
									className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
								></Link>
								<img
									src="/assets/images/blog-3.png"
									alt="blog-3"
									className="h-52 w-full rounded-t-3xl object-cover"
								/>
								<div className="p-5 text-sm font-bold">
									<h6 className="font-extrabold text-secondary dark:text-secondary">
										SEO Marketing
									</h6>
									<h5 className="my-[10px] line-clamp-2 block text-lg font-extrabold leading-[23px] text-black dark:text-white">
										What is SEO (Search Engine Optimization)?
									</h5>
									<p className="line-clamp-4">
										Search engine optimization is the process of
										improving the quality and quantity of website
										traffic to a website or a web page from search
										engines.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
