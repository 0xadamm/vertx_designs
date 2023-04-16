import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryLayout = () => {
  return (
    <section className="py-14 lg:py-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 lg:mb-14 lg:flex-row lg:justify-between">
          <div className="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
            <h4>Some of Our Cases</h4>
          </div>
          <Link href="/portfolio" className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary">
            View All
          </Link>
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2">
          <div
            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
            <div className="rounded-t-[32px] md:h-[355px]">
              <Image width={540} height={400} src="/assets/images/cases-1.png" alt="cases-1" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
            </div>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
              <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Integer ornare nisi vitae risus vulputate</h4>
              <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
            </div>
          </div>
          <div
            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
            <div className="rounded-t-[32px] md:h-[355px]">
              <Image width={540} height={400} src="/assets/images/cases-2.png" alt="cases-2" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
            </div>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
              <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Morbi vehicula metus a purus dapibu</h4>
              <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
            </div>
          </div>
          <div
            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
            <div className="rounded-t-[32px] md:h-[355px]">
              <Image width={540} height={400} src="/assets/images/cases-3.png" alt="cases-3" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
            </div>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
              <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Pellentesque imperdiet dui eget ante egestas</h4>
              <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
            </div>
          </div>
          <div
            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
            <div className="rounded-t-[32px] md:h-[355px]">
              <Image width={540} height={400} src="/assets/images/cases-4.png" alt="cases-4" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
            </div>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
              <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Mauris non lorem quis erat</h4>
              <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
            </div>
          </div>
          <div
            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary sm:col-span-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
            <div className="rounded-t-[32px] md:h-[606px]">
              <Image width={1100} height={700} src="/assets/images/cases-5.png" alt="cases-5" className="h-full w-full rounded-t-[32px] object-cover" />
            </div>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
              <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Pellentesque imperdiet dui eget ante egestas</h4>
              <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryLayout;
