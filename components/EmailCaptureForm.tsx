import React from "react";

const EmailCaptureForm = () => {
	return (
		<>
			<form
				action=""
				className="relative z-[1] pt-[50px] text-center ltr:xl:text-left rtl:xl:text-right"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<div className="relative inline-block w-full sm:w-auto">
					<input
						type="email"
						placeholder="Email Address"
						className="w-full rounded-2xl py-4 font-bold leading-5 outline-none ltr:pl-4 ltr:pr-[110px] rtl:pl-[110px] rtl:pr-4 dark:bg-gray-dark sm:w-[540px] sm:py-6 ltr:sm:pl-[30px] ltr:sm:pr-[140px] rtl:sm:pl-[140px] rtl:sm:pr-[30px]"
					/>
					<button
						type="submit"
						className="absolute top-0 h-full bg-secondary px-4 font-extrabold uppercase text-white ltr:right-0 ltr:rounded-r-2xl rtl:left-0 rtl:rounded-l-2xl sm:px-7"
					>
						submit
					</button>
				</div>
			</form>
		</>
	);
};

export default EmailCaptureForm;
