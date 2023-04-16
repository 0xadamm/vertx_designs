import React from 'react';

const Growth = () => {
  return (
    <section className="py-14 lg:py-[100px]">
      <div className="container">
        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
          <h6>Growth</h6>
          <h4>140% Growth in last year</h4>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 md:gap-[30px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="group rounded-[32px] border border-transparent bg-white px-4 py-8 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
              <div className="mx-auto xl:w-1/2">
                <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">90%</h2>
                <p className="line-clamp-2 text-sm font-bold text-gray-dark dark:text-white dark:group-hover:text-black">
                  Clients saw an increase of more of 90% on sales1
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="group rounded-[32px] border border-transparent bg-white px-4 py-8 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
              <div className="mx-auto xl:w-1/2">
                <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">10x</h2>
                <p className="line-clamp-2 text-sm font-bold text-gray-dark dark:text-white dark:group-hover:text-black">Sales went up more than expected</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="group rounded-[32px] border border-transparent bg-white px-4 py-8 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
              <div className="mx-auto xl:w-1/2">
                <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">4.4M</h2>
                <p className="line-clamp-2 text-sm font-bold text-gray-dark dark:text-white dark:group-hover:text-black">High engagement rate since day one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
