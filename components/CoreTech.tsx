import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
}

interface CoreTechProps {
  title?: string;
  logos: LogoProps[];
}

const CoreTech: React.FC<CoreTechProps> = ({ title, logos }) => {
  return (
    <section className="py-10 lg:py-8">
      <div className="container">
        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
          <h4>{title || 'Our Core Technologies'}</h4>
        </div>
        <div className="overflow-y-auto">
          <div className="grid w-auto grid-cols-2 gap-[30px] md:w-auto md:grid-cols-6">
            {logos.map((logos, index) => (
              <div key={index} className="rounded-[32px] border border-transparent transition duration-500 hover:border-secondary">
                <Image width={160} height={160} src={logos.src} alt={logos.alt} className="rounded-[32px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTech;
