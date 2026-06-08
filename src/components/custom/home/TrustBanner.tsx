import React from 'react';

const TrustBanner = () => {
  return (
    <section className="bg-amber-50 border-y border-amber-200 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['🏛️', 'সরকার অনুমোদিত', 'লাইসেন্স নং ১৪৬৭'],
            ['✈️', 'সরাসরি ফ্লাইট', 'ঢাকা থেকে জেদ্দা'],
            ['🕌', '৪ স্টার হোটেল', 'হারামের কাছে'],
            ['📋', 'ভিসা গ্যারান্টি', '১০০% সাফল্য'],
          ].map(([icon, title, sub]) => (
            <div key={title} className="flex items-center gap-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">
                  {title}
                </div>
                <div className="text-gray-500 text-xs">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
