/* eslint-disable max-len */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const PortfolioProjects = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  return (
    <section className="pb-14 pt-12 md:pb-[100px]">
      <div className="container">
        <div className="overflow-x-auto">
          <ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
            <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
              >
                All Work
              </button>
            </li>
            <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
              <button
                type="button"
                onClick={() => setActiveTab('design')}
                className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
              >
                Design
              </button>
            </li>
            <li className={`filter ${activeTab === 'website' ? 'active' : ''}`}>
              <button
                type="button"
                onClick={() => setActiveTab('website')}
                className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
              >
                Website
              </button>
            </li>
            <li className={`filter ${activeTab === 'app' ? 'active' : ''}`}>
              <button
                type="button"
                onClick={() => setActiveTab('app')}
                className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
              >
                Mobile App
              </button>
            </li>
          </ul>
        </div>
        <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
              <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
              <Image width={350} height={466} src="/assets/images/project-1.png" alt="project-1" className="h-52 w-full rounded-t-3xl object-cover" />
              <div className="p-5 text-sm font-bold">
                <h6 className="mb-1 text-black dark:text-white">Space Landing page</h6>
                <p>Website</p>
              </div>
            </div>
          </div>
          <div className={`project ${activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'}`}>
            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
              <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
              <Image width={350} height={524} src="/assets/images/project-2.png" alt="project-2" className="h-52 w-full rounded-t-3xl object-cover" />
              <div className="p-5 text-sm font-bold">
                <h6 className="mb-1 text-black dark:text-white">Crypto Game</h6>
                <p>Website, App</p>
              </div>
            </div>
          </div>
          <div className={`project ${activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'}`}>
            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
              <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
              <Image width={350} height={260} src="/assets/images/project-3.png" alt="project-3" className="h-52 w-full rounded-t-3xl object-cover" />
              <div className="p-5 text-sm font-bold">
                <h6 className="mb-1 text-black dark:text-white">Looking for a quiet place</h6>
                <p>Website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
