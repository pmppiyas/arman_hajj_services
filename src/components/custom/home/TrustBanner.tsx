import { assets } from '@/assets/assets';

const TrustBanner = () => {
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto w-full">
          {[
            ['🏛️', 'সরকার অনুমোদিত', 'লাইসেন্স নং ১৪৬৭'],
            ['✈️', 'সরাসরি ফ্লাইট', 'ঢাকা থেকে জেদ্দা'],
            ['🕌', '৪ স্টার হোটেল', 'হারামের কাছে'],
            ['📋', 'ভিসা গ্যারান্টি', '১০০% সাফল্য'],
          ].map(([icon, title, sub]) => (
            <div key={title} className="flex items-center gap-3 justify-center">
              <span className="text-3xl drop-shadow-lg">{icon}</span>
              <div>
                <div className="font-semibold text-white text-xl drop-shadow-md">
                  {title}
                </div>
                <div className="text-white/80 text-xs drop-shadow-sm">
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
