/* eslint-disable max-len */
import Image from 'next/image';
import CoreTech from './CoreTech';
import logos from '../constants/logos';

const PortfolioDetailFeatures = () => {
  return (
    <section className="py-14 md:py-[100px]">
      <div className="container">
        {/* <!--  Technologies --> */}
        <CoreTech logos={logos} title="Technologies" />

        {/* <!-- Features and Functionalities --> */}
        <div className="py-14 md:py-20">
          <h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Features and Functionalities</h3>
          <ul className="list-disc space-y-4 font-semibold leading-6 ltr:ml-[18px] rtl:mr-[18px] md:text-lg ltr:md:pl-4 rtl:md:pr-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Pellentesque sagittis risus sed accumsan efficitur.</li>
            <li>Curabitur non tortor semper, tincidunt augue at, luctus diam.</li>
            <li>Phasellus vitae metus nec nulla sagittis lobortis sit amet vitae dolor.</li>
            <li>Fusce lobortis justo pellentesque quam facilisis scelerisque.</li>
            <li>Phasellus id arcu dapibus, facilisis ipsum nec, faucibus urna.</li>
            <li>Nullam fermentum ipsum sit amet justo convallis, quis iaculis massa finibus.</li>
            <li>Vivamus eget dui pulvinar, aliquet magna eget, dignissim felis.</li>
          </ul>
        </div>

        {/* Description */}
        <div className="pb-14 md:pb-20">
          <h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Description</h3>
          <p className="relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg">
            Mosaic is a finance tool for making better business moves — automating data aggregation, analysis, and financial forecasting. In late 2021, we
            partnered to help them take charge of the Strategic Finance category with a new brand, voice, and web experience. To connect with their audience of
            finance leaders they needed to look and feel like a polished, confident, no-nonsense brand.
          </p>
        </div>

        {/* <!-- Images -->  */}
        <div className="grid gap-[30px] sm:grid-cols-2">
          <Image
            width={540}
            height={800}
            src="/assets/images/portfolio-img-1.png"
            alt="portfolio-img-1"
            className="rounded-[32px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <Image
            width={540}
            height={415}
            src="/assets/images/portfolio-img-2.png"
            alt="portfolio-img-2"
            className="rounded-[32px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div className="py-[30px] sm:py-[50px]">
          <Image
            width={1110}
            height={500}
            src="/assets/images/portfolio-img-3.png"
            alt="portfolio-img-3"
            className="rounded-[32px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div>
          <Image
            width={1110}
            height={800}
            src="/assets/images/portfolio-img-4.png"
            alt="portfolio-img-4"
            className="rounded-[32px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailFeatures;
