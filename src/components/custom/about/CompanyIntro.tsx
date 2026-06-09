const CompanyIntro = () => {
  return (
    <section
      className="py-16 md:py-20 px-4 md:px-8 lg:px-12"
      style={{
        background:
          'linear-gradient(135deg, oklch(0.48 0.12 165) 0%, oklch(0.44 0.11 170) 35%, oklch(0.7 0.08 185) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">
              প্রতিষ্ঠান পরিচিতি
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6  text-background">
              আরমান আবির হজ সার্ভিস
            </h2>
            <p className="leading-relaxed mb-4 text-sm text-white/80">
              আরমান আবির হজ সার্ভিস বাংলাদেশ সরকার কর্তৃক অনুমোদিত একটি বিশ্বস্ত
              হজ ও উমরাহ এজেন্সি। আমরা গাইবান্ধার গোবিন্দগঞ্জ থেকে পরিচালিত হয়ে
              সারা বাংলাদেশে সেবা প্রদান করে আসছি।
            </p>
            <p className="leading-relaxed mb-6 text-sm text-white/80">
              আমাদের অভিজ্ঞ দল প্রতিটি যাত্রীকে সম্পূর্ণ নিরাপদে ও সাচ্ছন্দ্যে
              পবিত্র মক্কা-মদিনায় পৌঁছে দেওয়ার জন্য নিরলসভাবে কাজ করে।
            </p>

            {/* Key info pills */}
            <div className="flex flex-wrap gap-3">
              {[
                ['🪪', 'লাইসেন্স নং: ১৪৬৭'],
                ['✈️', 'হাসিনা আর ট্রাভেলস'],
                ['📍', 'গোবিন্দগঞ্জ, গাইবান্ধা'],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  <span>{icon}</span> {label}
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          >
            <h3
              className="font-bold text-lg mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              আমাদের অর্জন
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['১০+', 'বছরের অভিজ্ঞতা'],
                ['৫০০০+', 'সন্তুষ্ট হাজি'],
                ['৩টি', 'উমরাহ প্যাকেজ'],
                ['২৪/৭', 'গ্রাহক সেবা'],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'var(--muted)' }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: 'var(--primary)' }}
                  >
                    {n}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
