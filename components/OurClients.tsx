import Link from "next/link";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { useState } from "react";

const OurClients = () => {
	const isRtl =
		useSelector(
			(state: IRootState) => state.themeConfig.direction
		) === "rtl"
			? true
			: false;
	const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
	return (
		<section className="py-14 md:py-20">
			<div className="container">
				<div className="mb-8 flex flex-col items-center gap-5 md:mb-0 md:flex-row md:items-start md:justify-between">
					<div className="heading-gradiant mb-0 flex-1 md:mb-12">
						<h4>
							We value <span>our clients</span>
						</h4>
						<p className="xl:w-2/3">Our Clients Say</p>
					</div>
					<div className="mt-2 flex items-center justify-end gap-4">
						<Link
							href="/blog"
							className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
						>
							View All
						</Link>
						<button
							type="button"
							className="client-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition hover:bg-secondary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-secondary"
						>
							<svg
								width="7"
								height="12"
								viewBox="0 0 7 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="rtl:rotate-180"
							>
								<path
									d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								></path>
							</svg>
						</button>
						<button
							type="button"
							className="client-slider-button-next flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition hover:bg-secondary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-secondary"
						>
							<svg
								width="7"
								height="12"
								viewBox="0 0 7 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="rtl:rotate-180"
							>
								<path
									d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<div className="flex gap-7">
					<div className="hidden w-2/5 space-y-7 text-sm font-bold md:block">
						<Swiper
							className="client-slider-slides max-h-[500px]"
							onSwiper={e => setThumbsSwiper(e)}
							direction="vertical"
							mousewheel={true}
							slidesPerView={4}
							loop={true}
							freeMode={true}
							watchSlidesProgress={true}
							dir={isRtl ? "rtl" : "ltr"}
							key={isRtl ? "true" : "false"}
						>
							<SwiperSlide>
								<div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-1.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Allan Branch
											</h4>
											<h6 className="italic">CEO of Lifted</h6>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-2.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Alistair Clay
											</h4>
											<h6 className="italic">Founder of Class PR</h6>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-3.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Tim Nichols
											</h4>
											<h6 className="italic">CTO of Exact Drive</h6>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-4.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Mark Colgan
											</h4>
											<h6 className="italic">
												Founder of Social Media Examiner
											</h6>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div className="w-full md:w-3/5">
						<Swiper
							loop={true}
							spaceBetween={10}
							navigation={{
								nextEl: ".client-slider-button-next",
								prevEl: ".client-slider-button-prev",
							}}
							thumbs={{
								swiper:
									thumbsSwiper && !thumbsSwiper.destroyed
										? thumbsSwiper
										: null,
							}}
							modules={[Navigation, Thumbs]}
							dir={isRtl ? "rtl" : "ltr"}
							key={isRtl ? "true" : "false"}
						>
							<SwiperSlide>
								<div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-1.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Allan Branch
											</h4>
											<h6 className="text-sm font-bold italic">
												CEO of Lifted
											</h6>
										</div>
									</div>
									<div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
										<div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
											<svg
												width="100"
												height="73"
												viewBox="0 0 100 73"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g opacity="0.08">
													<path
														d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
														fill="#93A2B2"
													/>
													<path
														d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
														fill="#93A2B2"
													/>
												</g>
											</svg>
										</div>
										<h6 className="pb-7 font-extrabold">
											“Best Design Company”
										</h6>
										<p className="text-sm font-semibold italic">
											We partnered with Fluid Studios to design our
											website. We found them incredibly helpful and
											patient as we really didn't know what we
											wanted. Greg met with us on numerous occasions
											and we found the whole process a great
											experience. We ended up with a website we
											loved. I would definitely recommend Fluid
											Studios - you won't be disappointed.
										</p>
										<ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
											<li>Las Vegas, United States</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-2.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Alistair Clay
											</h4>
											<h6 className="text-sm font-bold italic">
												Founder of Class PR
											</h6>
										</div>
									</div>
									<div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
										<div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
											<svg
												width="100"
												height="73"
												viewBox="0 0 100 73"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g opacity="0.08">
													<path
														d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
														fill="#93A2B2"
													/>
													<path
														d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
														fill="#93A2B2"
													/>
												</g>
											</svg>
										</div>
										<h6 className="pb-7 font-extrabold">
											“Best Design Company”
										</h6>
										<p className="text-sm font-semibold italic">
											We partnered with Fluid Studios to design our
											website. We found them incredibly helpful and
											patient as we really didn't know what we
											wanted. Greg met with us on numerous occasions
											and we found the whole process a great
											experience. We ended up with a website we
											loved. I would definitely recommend Fluid
											Studios - you won't be disappointed.
										</p>
										<ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
											<li>Las Vegas, United States</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-3.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Tim Nichols
											</h4>
											<h6 className="text-sm font-bold italic">
												CTO of Exact Drive
											</h6>
										</div>
									</div>
									<div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
										<div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
											<svg
												width="100"
												height="73"
												viewBox="0 0 100 73"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g opacity="0.08">
													<path
														d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
														fill="#93A2B2"
													/>
													<path
														d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
														fill="#93A2B2"
													/>
												</g>
											</svg>
										</div>
										<h6 className="pb-7 font-extrabold">
											“Best Design Company”
										</h6>
										<p className="text-sm font-semibold italic">
											We partnered with Fluid Studios to design our
											website. We found them incredibly helpful and
											patient as we really didn't know what we
											wanted. Greg met with us on numerous occasions
											and we found the whole process a great
											experience. We ended up with a website we
											loved. I would definitely recommend Fluid
											Studios - you won't be disappointed.
										</p>
										<ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
											<li>Las Vegas, United States</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 flex-none rounded-full">
											<img
												src="/assets/images/nft/testimonial-client-4.png"
												alt=""
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-extrabold text-black dark:text-white">
												Mark Colgan
											</h4>
											<h6 className="text-sm font-bold italic">
												Founder of Social Media Examiner
											</h6>
										</div>
									</div>
									<div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
										<div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
											<svg
												width="100"
												height="73"
												viewBox="0 0 100 73"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g opacity="0.08">
													<path
														d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
														fill="#93A2B2"
													/>
													<path
														d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
														fill="#93A2B2"
													/>
												</g>
											</svg>
										</div>
										<h6 className="pb-7 font-extrabold">
											“Best Design Company”
										</h6>
										<p className="text-sm font-semibold italic">
											We partnered with Fluid Studios to design our
											website. We found them incredibly helpful and
											patient as we really didn't know what we
											wanted. Greg met with us on numerous occasions
											and we found the whole process a great
											experience. We ended up with a website we
											loved. I would definitely recommend Fluid
											Studios - you won't be disappointed.
										</p>
										<ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
											<li>Las Vegas, United States</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurClients;
