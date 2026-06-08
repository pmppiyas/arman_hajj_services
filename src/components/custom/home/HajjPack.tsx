const HajjPack = () => {
  const HAJJ_PACKAGES = [
    {
      name: 'সরকারি হজ প্যাকেজ',
      price: '৫,৮৫,০০০',
      type: 'সরকারি',
      color: 'from-green-600 to-emerald-700',
      border: 'border-green-200',
      features: [
        'বিমান টিকিট',
        'হজ ভিসা',
        'মিনা ও আরাফার ব্যবস্থা',
        'মক্কা হোটেল',
        'মদিনা হোটেল',
        'খাবার',
        'গাইড ও মোয়াল্লেম',
        'জিয়ারাহ',
        'মেডিকেল সাপোর্ট',
      ],
    },
    {
      name: 'বেসরকারি হজ প্যাকেজ',
      price: '৭,৫০,০০০',
      type: 'বেসরকারি',
      color: 'from-blue-600 to-cyan-700',
      border: 'border-blue-200',
      features: [
        'বিমান টিকিট',
        'হজ ভিসা',
        'উন্নত মিনা ও আরাফা',
        '৪ স্টার হোটেল',
        '৪ স্টার মদিনা হোটেল',
        'তিন বেলা খাবার',
        'অভিজ্ঞ গাইড',
        'কুরবানির ব্যবস্থা',
        'মেডিকেল সাপোর্ট',
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            হজ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            হজ প্যাকেজ সমূহ
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            সরকারি ও বেসরকারি উভয় হজ প্যাকেজ উপলব্ধ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {HAJJ_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`
                bg-white rounded-2xl overflow-hidden shadow-lg border-2 ${pkg.border}
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              `}
            >
              {/* Header */}
              <div className={`bg-linear-to-r ${pkg.color} p-8 text-white`}>
                <div className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {pkg.type}
                </div>

                <h3 className="text-2xl font-bold">{pkg.name}</h3>

                <div className="mt-4">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span className="text-white/70 ml-1">/জন</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-2">
                  {pkg.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-700 py-1 hover:text-gray-900 transition-colors duration-200"
                    >
                      <span className="text-green-500 font-bold">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/8801700000000"
                  className={`
                    mt-6 w-full block text-center bg-linear-to-r ${pkg.color}
                    text-white font-semibold py-3 rounded-xl
                    hover:opacity-90 hover:scale-[1.02]
                    transition-all duration-300
                  `}
                >
                  বিস্তারিত জানুন
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HajjPack;
