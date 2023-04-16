import React from 'react';
import Image from 'next/image';

type ExpertiseCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  animationDelay: number;
};

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ imageSrc, imageAlt, title, animationDelay }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={animationDelay}>
      <div className="flex items-center justify-start gap-3 rounded-[32px] border-2 border-white bg-white p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-secondary hover:bg-secondary/10 dark:border-gray-dark dark:bg-gray-dark dark:hover:border-secondary sm:justify-center md:p-10">
        <div>
          <Image width={50} height={50} src={imageSrc} alt={imageAlt} />
        </div>
        <h6 className="text-xl font-bold text-black dark:text-white">{title}</h6>
      </div>
    </div>
  );
};

export default ExpertiseCard;
