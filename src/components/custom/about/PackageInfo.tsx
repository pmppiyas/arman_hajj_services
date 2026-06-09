import React from 'react';

const PackageInfo = () => {
  const packages = [
    {
      name: 'প্রিমিয়াম প্যাকেজ',
      price: '১,৫০,০০০/-',
      icon: '⭐',
      details: [
        {
          label: 'অন্তর্ভুক্ত',
          value: 'টিকিট · ভিসা · হোটেল · ট্রান্সপোর্ট · খাবার',
        },
        {
          label: 'মক্কা হোটেল',
          value: '২০০ মিটার · ৪ তারকা · কবুতর চত্বর ভেতরে',
        },
        {
          label: 'মদিনা হোটেল',
          value: '২০০ মিটার · ৪ তারকা · মারকাজিয়ার ভিতরে',
        },
      ],
    },
    {
      name: 'ইকোনমি প্যাকেজ',
      price: '১,৩০,০০০/-',
      icon: '🕌',
      details: [
        {
          label: 'অন্তর্ভুক্ত',
          value: 'টিকিট · ভিসা · হোটেল · ট্রান্সপোর্ট · খাবার',
        },
        {
          label: 'মক্কা হোটেল',
          value: '৪০০ মিটার · ৩ তারকা · মিসপাল্লার ব্রিজের ভেতরে',
        },
        {
          label: 'মদিনা হোটেল',
          value: '৪০০ মিটার · ৩ তারকা · কুবা রোড, বেলাল মসজিদের ভিতরে',
        },
      ],
    },
  ];

  return (
    <section
      className="px-4 md:px-8 lg:px-12 py-16 md:py-20"
      style={{ background: 'var(--secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--muted-foreground)' }}
          >
            উমরাহ · হজ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--foreground)' }}
          >
            আমাদের প্যাকেজ একনজরে
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="card-hover rounded-2xl overflow-hidden"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="p-6"
                style={{
                  background:
                    'linear-gradient(135deg, oklch(0.48 0.12 165) 0%, oklch(0.7 0.08 185) 100%)',
                }}
              >
                <span className="text-4xl">{pkg.icon}</span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {pkg.name}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  মূল্য: ৳{pkg.price}
                </p>
              </div>
              <div className="p-6 space-y-3">
                {pkg.details.map((d) => (
                  <div key={d.label}>
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {d.label}
                    </span>
                    <p
                      className="text-sm mt-0.5 font-medium"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageInfo;
