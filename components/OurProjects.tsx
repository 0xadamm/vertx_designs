/* eslint-disable max-len */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const OurProjects = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  return (
    <div className="container py-8 lg:pb-24">
      {/* <!-- How can I make this div appear conditionally? --> */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
          <h6>Our Projects</h6>
          <h4>Some of our finest work.</h4>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="text-sm font-extrabold text-black dark:text-white">View All</div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
          >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
              <path
                d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
          >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
              <path
                d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-7">
        <ul className="filters home-filter mt-10 flex gap-8 overflow-x-auto whitespace-nowrap pb-3 font-bold lg:mt-0 lg:gap-10">
          <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
            <button type="button" onClick={() => setActiveTab('all')} className="transition hover:text-secondary">
              All Work
            </button>
          </li>
          <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
            <button type="button" onClick={() => setActiveTab('design')} className="transition hover:text-secondary">
              Design
            </button>
          </li>
          <li className={`filter ${activeTab === 'website' ? 'active' : ''}`}>
            <button type="button" onClick={() => setActiveTab('website')} className="transition hover:text-secondary">
              Website
            </button>
          </li>
          <li className={`filter ${activeTab === 'app' ? 'active' : ''}`}>
            <button type="button" onClick={() => setActiveTab('app')} className="transition hover:text-secondary">
              Mobile App
            </button>
          </li>
        </ul>
      </div>
      <div className="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className={`project ${activeTab === 'all' || activeTab === 'web' ? 'block' : 'hidden'}`}>
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link href="/portfolio-detail" className="absolute left-0 top-0 h-full w-full"></Link>
            {/* <!-- width: '350' height: '500' -->*/}
            <Image width={350} height={500} src="/assets/images/project-1.png" alt="project-1" className="h-52 w-full rounded-t-3xl object-cover" />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">Space Landing page</h6>
              <p>Website</p>
            </div>
          </div>
        </div>
        <div className={`project ${activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'}`}>
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link href="/portfolio-detail" className="absolute left-0 top-0 h-full w-full"></Link>
            <Image width={350} height={500} src="/assets/images/project-2.png" alt="project-2" className="h-52 w-full rounded-t-3xl object-cover" />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">Crypto Game - UX Interface</h6>
              <p>Website, App</p>
            </div>
          </div>
        </div>
        <div className={`project ${activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'}`}>
          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
            <Link href="/portfolio-detail" className="absolute left-0 top-0 h-full w-full"></Link>
            <Image width={350} height={500} src="/assets/images/project-3.png" alt="project-3" className="h-52 w-full rounded-t-3xl object-cover" />
            <div className="p-5 text-sm font-bold">
              <h6 className="mb-1 text-black dark:text-white">Looking for a quiet place</h6>
              <p>Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
