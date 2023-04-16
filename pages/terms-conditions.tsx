import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Head from "next/head";
import ContactNow from "../components/ContactNow";
import SubHero from "../components/SubHero";

const Termsandcondition = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;

	return (
		<div>
			<Head>
				<title>Terms & Conditions | Vertx Designs</title>
			</Head>
			<SubHero
				subtitle={"Terms & Conditions"}
				image={"/assets/images/termsAndConditions.svg"}
				height={282}
				width={352}
			/>

			<div className="py-14 md:py-[100px]">
				<div className="container">
					<div className="pb-12">
						<h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
							Terms and Conditions
						</h4>
						<p className="pb-5 text-lg font-medium">
							This document is an electronic record in terms of the
							Information Technology Act, 2000 and its corresponding
							rules and regulations, as well as the amended
							provisions pertaining to electronic records in various
							statutes as amended by the Information Technology Act,
							2000. This electronic record is generated by a computer
							system and does not require any physical or digital
							signatures.
						</p>
						<p className="pb-5 text-lg font-medium">
							This document is published in accordance with the
							provisions of Rule 3 (1) of the Information Technology
							(Intermediaries guidelines) Rules, 2011, which require
							publishing the rules and regulations, privacy policy,
							and Terms of Use for access or usage of the Vertx
							Designs website.
						</p>
						<p className="pb-5 text-lg font-medium">
							The Vertx Designs website, including all materials
							present (excluding any applicable third-party
							materials), is the property of Vertx Designs and is
							copyrighted and protected by worldwide copyright laws
							and treaty provisions. You hereby agree to comply with
							all copyright laws worldwide in your use of this
							website and to prevent any unauthorized copying of the
							materials.
						</p>
						<p className="pb-5 text-lg font-medium">
							By accessing this website, we assume you accept these
							terms and conditions. Do not continue to use the Vertx
							Designs website if you do not agree to all the terms
							and conditions stated on this page.
						</p>
						<p className="text-lg font-medium">
							The following terminology applies to these Terms and
							Conditions, Privacy Statement, and Disclaimer Notice,
							and all Agreements: "Client", "You", and "Your" refer
							to you, the person logging onto this website and
							agreeing to the company's terms and conditions. "The
							Company", "Ourselves", "We", "Our", and "Us" refer to
							Vertx Designs. "Party", "Parties", or "Us" refer to
							both the Client and Vertx Designs.
						</p>
					</div>
					<div className="pb-12">
						<h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
							Cookies
						</h4>
						<p className="pb-5 text-lg font-medium">
							We employ the use of cookies. By accessing the Vertx
							Designs website, you agree to the use of cookies in
							accordance with Vertx Designs' Privacy Policy.
						</p>
						<p className="text-lg font-medium">
							Most interactive websites use cookies to let us
							retrieve the user's details for each visit. Cookies are
							used by our website to enable the functionality of
							certain areas, making it easier for people visiting our
							website. Some of our affiliate/advertising partners may
							also use cookies.
						</p>
					</div>
					<div className="pb-12">
						<h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
							License
						</h4>
						<p className="pb-5 text-lg font-medium">
							Unless otherwise stated, Vertx Designs and/or its
							licensors own the intellectual property rights for all
							material on the Vertx Designs website. All intellectual
							property rights are reserved. You may access this
							material from the Vertx Designs website for your own
							personal use, subject to restrictions set in these
							terms and conditions.
						</p>
						<h6 className="pb-2 font-semibold text-black">
							You must not:
						</h6>
						<ul className="pb-5 text-lg font-medium">
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								Republish material from the Vertx Designs website
							</li>
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								Sell, rent, or sub-license material from the Vertx
								Designs website
							</li>
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								Reproduce, duplicate, or copy material from the Vertx
								Designs website
							</li>
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								Redistribute content from the Vertx Designs website
							</li>
						</ul>
						<p className="pb-5 text-lg font-medium">
							This Agreement shall begin on the date hereof.
						</p>
						<p className="pb-5 text-lg font-medium">
							Parts of this website offer an opportunity for users to
							post and exchange opinions and information in certain
							areas of the website. Vertx Designs does not filter,
							edit, publish, or review comments prior to their
							presence on the website. Comments do not reflect the
							views and opinions of Vertx Designs, its agents, and/or
							affiliates. Comments reflect the views and opinions of
							the person who posts their views and opinions.
						</p>
						<p className="pb-5 text-lg font-medium">
							Vertx Designs reserves the right to monitor all
							comments and remove any comments that can be considered
							inappropriate, offensive, or in breach of these Terms
							and Conditions.
						</p>

						<h6 className="pb-2 font-semibold text-black">
							You warrant and represent that:
						</h6>
						<ul className="pb-5 text-lg font-medium ltr:pl-1 rtl:pr-1">
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								You are entitled to post the comments on our website
								and have all necessary licenses and consents to do so
							</li>
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								The comments do not infringe on any intellectual
								property rights, including without limitation,
								copyright, patent, or trademark of any third party
							</li>
							<li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
								The comments do not contain any defamatory, libelous,
								offensive, indecent, or otherwise unlawful material
								that is an invasion of privacy
							</li>
						</ul>

						<p className="text-lg font-medium">
							You hereby grant Company Name a non-exclusive license
							to use, reproduce, edit and authorize others to use,
							reproduce and edit any of your Comments in any and all
							forms, formats or media.
						</p>
					</div>
				</div>
			</div>
			<ContactNow />
		</div>
	);
};

export default Termsandcondition;
