const UmraPack = () => {
  const UMRAH_PACKAGES = [
    {
      name: 'ইকোনমি প্যাকেজ',
      price: '১,৩০,০০০',
      badge: '',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-200',
      bg: 'bg-emerald-50',
      icon: '🕌',
      features: [
        'বিমান টিকিট',
        'উমরাহ ভিসা',
        'হোটেল (৩ স্টার)',
        'পরিবহন',
        'খাবার',
        'মক্কা: ৪০০ মিটার',
        'মদিনা: ৪০০ মিটার',
      ],
    },
    {
      name: 'প্রিমিয়াম প্যাকেজ',
      price: '১,৫০,০০০',
      badge: 'সর্বাধিক জনপ্রিয়',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-300',
      bg: 'bg-amber-50',
      icon: '⭐',
      features: [
        'বিমান টিকিট',
        'উমরাহ ভিসা',
        'হোটেল (৪ স্টার)',
        'পরিবহন',
        'খাবার',
        'মক্কা: ২০০ মিটার',
        'মদিনা: ২০০ মিটার',
      ],
    },
    {
      name: 'স্ট্যান্ডার্ড VIP',
      price: '২,০০,০০০',
      badge: 'VIP',
      color: 'from-purple-600 to-indigo-700',
      border: 'border-purple-300',
      bg: 'bg-purple-50',
      icon: '👑',
      features: [
        'VIP বিমান টিকিট',
        'উমরাহ ভিসা',
        'হোটেল (৫ স্টার · ০ মিটার)',
        'VIP পরিবহন',
        'সম্পূর্ণ খাবার',
        'VIP জিয়ারাহ',
        'সম্পূর্ণ VIP সার্ভিস',
      ],
    },
  ];

  return (
    <section id="packages" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            উমরাহ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            উমরাহ প্যাকেজ সমূহ
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            আপনার বাজেট ও চাহিদা অনুযায়ী সেরা প্যাকেজটি বেছে নিন
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {UMRAH_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`
                relative bg-white rounded-2xl overflow-hidden border-2 ${pkg.border} shadow-md
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              `}
            >
              {pkg.badge && (
                <div
                  className={`absolute top-4 right-4 bg-linear-to-r ${pkg.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10`}
                >
                  {pkg.badge}
                </div>
              )}
              <div className={`bg-linear-to-r ${pkg.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{pkg.icon}</div>
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-bold">৳{pkg.price}</span>
                  <span className="text-white/70 text-sm ml-1">/জন</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/8801700000000"
                  className={`
                    mt-6 w-full block text-center bg-linear-to-r ${pkg.color}
                    text-white font-semibold py-3 rounded-xl
                    hover:opacity-90 hover:scale-[1.02]
                    transition-all duration-300
                  `}
                >
                  বুকিং করুন
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UmraPack;
