const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #065f46 0%, #047857 30%, #0f766e 60%, #1e3a5f 100%)',
      }}
    >
      <div className="hero-pattern absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute top-20 left-20 w-20 h-20 border border-white rounded-full" />
        <div className="absolute bottom-10 right-20 w-60 h-60 border border-white rounded-full" />
        <div className="absolute -top-10 right-1/4 w-80 h-80 border border-white rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            সরকার অনুমোদিত · লাইসেন্স নং: ১৪৬৭
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            আরমান আবির
            <br />
            <span className="text-amber-300">হজ সার্ভিস</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            বিশ্বস্ততার সাথে পবিত্র হজ ও উমরাহ সম্পাদনে আমরা আপনার পাশে।
            গাইবান্ধা থেকে মক্কা-মদিনা পর্যন্ত সম্পূর্ণ সেবা।
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#packages"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shimmer"
            >
              এখনই বুকিং করুন
            </a>
            <a
              href="tel:+8801700000000"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl border border-white/40 transition-all flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              কল করুন
            </a>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            ['১০+', 'বছরের অভিজ্ঞতা'],
            ['৫০০০+', 'সন্তুষ্ট হাজি'],
            ['৩টি', 'উমরাহ প্যাকেজ'],
            ['২৪/৭', 'গ্রাহক সেবা'],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-amber-300">{num}</div>
              <div className="text-white/70 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
