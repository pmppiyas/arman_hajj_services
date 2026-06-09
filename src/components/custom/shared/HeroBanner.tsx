import { assets } from '@/assets/assets';

const HeroBanner = ({
  heading,
  subheading,
  breadcrumb,
}: {
  heading: string;
  subheading: string;
  breadcrumb: string;
}) => {
  return (
    <section
      className="relative   px-4 md:px-8 lg:px-12 py-16 md:py-20"
      style={{
        backgroundImage: `url(${assets.kaba1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 75%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
      {/* decorative rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute top-20 left-20 w-20 h-20 border border-white rounded-full" />
        <div className="absolute bottom-10 right-20 w-60 h-60 border border-white rounded-full" />
        <div className="absolute -top-10 right-1/4 w-80 h-80 border border-white rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto relative fade-in">
          {/* breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse inline-block" />
            {breadcrumb}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            {subheading}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
