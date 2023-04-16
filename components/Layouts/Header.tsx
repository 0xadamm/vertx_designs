/* eslint-disable max-len */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "../../store";
import {
	toggleTheme,
	toggleDirection,
} from "../../store/themeConfigSlice";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = (props: any) => {
	const router = useRouter();

	const themeConfig = useSelector(
		(state: IRootState) => state.themeConfig
	);
	const dispatch = useDispatch();

	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		if (window.innerWidth < 1024) {
			setShowMenu(!showMenu);
		} else {
			setShowMenu(false);
		}
	};

	const [showSearch, setShowSearch] = useState(false);
	const toggleSearch = () => {
		setShowSearch(!showSearch);
	};

	return (
		<header
			className={`sticky top-0 z-50 bg-black/10 transition duration-300 ${props.className}`}
		>
			<div className="container">
				<div className="flex items-center justify-between py-5 lg:py-0">
					<Link href="/">
						<Image
							width={30}
							height={26}
							src="/assets/images/logo.png"
							alt="vertxDesigns"
							className="h-auto w-auto"
						/>
					</Link>
					<div className="flex items-center">
						<div
							onClick={() => toggleMenu()}
							className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${
								showMenu ? "" : "hidden"
							}`}
						></div>
						<div
							className={`menus ${
								showMenu
									? "overflow-y-auto ltr:!right-0 rtl:!left-0"
									: ""
							}`}
						>
							<div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
								<button
									onClick={() => toggleMenu()}
									type="button"
									className="p-4"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="h-6 w-6 text-black dark:text-white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<ul onClick={() => toggleMenu()}>
								{/* Home */}
								<li>
									<Link
										href="/"
										className={
											router.pathname === "/" ? "active" : ""
										}
									>
										Home
									</Link>
								</li>
								{/* Portfolio */}
								{/* <li>
									<Link
										href="/portfolio"
										className={
											router.pathname === "/portfolio" ||
											router.pathname === "/portfolio-detail"
												? "active"
												: ""
										}
									>
										Portfolio
									</Link>
								</li> */}
								{/* Services */}
								<li>
									<Link
										href="/services"
										className={
											router.pathname === "/services" ||
											router.pathname === "/services-detail"
												? "active"
												: ""
										}
									>
										Services
									</Link>
								</li>
								{/* About */}
								<li>
									<Link
										href="/about"
										className={
											router.pathname === "/about" ? "active" : ""
										}
									>
										About
									</Link>
								</li>
								{/* Contact */}
								<li>
									<Link
										href="/contact"
										className={
											router.pathname === "/contact" ? "active" : ""
										}
									>
										Contact
									</Link>
								</li>

								<li className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:pl-9 ltr:before:-left-[2px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex"></li>
							</ul>
						</div>
						<ul className="flex items-center gap-5 ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pl-0 rtl:lg:pr-5">
							<li>
								<button
									type="button"
									className="flex h-5 w-5 items-center text-white hover:text-primary rtl:text-primary"
									onClick={() =>
										dispatch(
											toggleDirection(
												`${
													themeConfig.direction === "rtl"
														? "ltr"
														: "rtl"
												}`
											)
										)
									}
								>
									<svg
										width="17"
										height="22"
										viewBox="0 0 17 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16 18.9439H7.72074"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M13.8571 21L16 18.9439L13.8571 16.8879"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 16.4206H9.27926"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M3.14287 18.4766L1 16.4206L3.14287 14.3645"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12.7855 1H5.82118C4.82662 1 3.87279 1.37909 3.16952 2.05387C2.46626 2.72865 2.07117 3.64385 2.07117 4.59813C2.07117 5.55242 2.46626 6.46761 3.16952 7.14239C3.87279 7.81717 4.82662 8.19626 5.82118 8.19626H6.3569"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M10.6426 12.3084V1"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M6.3573 12.3084V1"
											stroke="currentColor"
											strokeWidth="1.4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</li>
							<li>
								<button
									type="button"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-dark text-white hover:text-primary"
									onClick={() =>
										dispatch(
											toggleTheme(
												`${
													themeConfig.theme === "light"
														? "dark"
														: "light"
												}`
											)
										)
									}
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className={`${
											themeConfig.theme === "dark" ? "hidden" : ""
										}`}
									>
										<path
											d="M8 4C8 8.4 11.6 12 16 12C17.4 12 18.8 11.6 20 11C19.5 16.1 15.2 20 10 20C4.5 20 0 15.5 0 10C0 4.8 4 0.5 9 0C8.4 1.2 8 2.6 8 4ZM2 10C2 14.4 5.6 18 10 18C12.9 18 15.5 16.5 17 14C16.7 14 16.4 14 16 14C10.5 14 6 9.5 6 4C6 3.7 6 3.4 6 3C3.6 4.4 2 7.1 2 10Z"
											fill="currentColor"
										/>
									</svg>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className={`${
											themeConfig.theme === "light" ? "hidden" : ""
										}`}
									>
										<path
											d="M10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15ZM10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667C9.11595 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11595 6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9821 9.11595 13.3333 10 13.3333Z"
											fill="currentColor"
										/>
										<path
											d="M9.09091 0.909092C9.09091 0.407014 9.49792 0 10 0C10.5021 0 10.9091 0.407014 10.9091 0.909092V1.81818C10.9091 2.32026 10.5021 2.72727 10 2.72727C9.49792 2.72727 9.09091 2.32026 9.09091 1.81818V0.909092ZM9.09091 18.1818C9.09091 17.6797 9.49792 17.2727 10 17.2727C10.5021 17.2727 10.9091 17.6797 10.9091 18.1818V19.0909C10.9091 19.593 10.5021 20 10 20C9.49792 20 9.09091 19.593 9.09091 19.0909V18.1818ZM2.92909 4.21455C2.57412 3.85958 2.57412 3.28406 2.92909 2.92909C3.28406 2.57412 3.85958 2.57412 4.21455 2.92909L4.85727 3.57182C5.21224 3.92679 5.21224 4.5023 4.85727 4.85727C4.5023 5.21224 3.92679 5.21224 3.57182 4.85727L2.92909 4.21455ZM15.1427 16.4282C14.7878 16.0732 14.7878 15.4977 15.1427 15.1427C15.4977 14.7878 16.0732 14.7878 16.4282 15.1427L17.0709 15.7855C17.4259 16.1404 17.4259 16.7159 17.0709 17.0709C16.7159 17.4259 16.1404 17.4259 15.7855 17.0709L15.1427 16.4282ZM15.7851 2.92886C16.1402 2.57358 16.7161 2.57361 17.0712 2.92894C17.4261 3.28403 17.4259 3.85951 17.071 4.21447L16.4283 4.8572C16.0732 5.21221 15.4977 5.21221 15.1427 4.8572C14.7877 4.50225 14.7876 3.92678 15.1425 3.57174L15.7851 2.92886ZM3.57182 15.1427C3.92679 14.7878 4.5023 14.7878 4.85727 15.1427C5.21224 15.4977 5.21224 16.0732 4.85727 16.4282L4.21455 17.0709C3.85958 17.4259 3.28406 17.4259 2.92909 17.0709C2.57412 16.7159 2.57412 16.1404 2.92909 15.7855L3.57182 15.1427ZM19.0909 9.09091C19.593 9.09091 20 9.49792 20 10C20 10.5021 19.593 10.9091 19.0909 10.9091H18.1818C17.6797 10.9091 17.2727 10.5021 17.2727 10C17.2727 9.49792 17.6797 9.09091 18.1818 9.09091H19.0909ZM1.81818 9.09091C2.32026 9.09091 2.72727 9.49792 2.72727 10C2.72727 10.5021 2.32026 10.9091 1.81818 10.9091H0.909092C0.407014 10.9091 0 10.5021 0 10C0 9.49792 0.407014 9.09091 0.909092 9.09091H1.81818Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</li>
						</ul>
						<button
							type="button"
							className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
							onClick={() => toggleMenu()}
						>
							<svg
								width="22"
								height="18"
								viewBox="0 0 22 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-white"
							>
								<path
									d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
									fill="currentColor"
								/>
								<path
									d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
									fill="currentColor"
								/>
								<path
									d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
