const Values = () => {
  const values = [
    [
      '🏆',
      'সরকার অনুমোদিত',
      'লাইসেন্স নং ১৪৬৭ সহ বাংলাদেশ সরকার কর্তৃক অনুমোদিত প্রতিষ্ঠান।',
    ],
    [
      '🤝',
      'বিশ্বস্ত সেবা',
      '১০+ বছরের অভিজ্ঞতায় হাজার হাজার পুণ্যার্থীকে সফলভাবে সেবা দিয়ে আসছি।',
    ],
    [
      '❤️',
      'আমাদের লক্ষ্য',
      'প্রতিটি হাজিকে নিরাপদে ও সাচ্ছন্দ্যে পবিত্র ভূমিতে পৌঁছে দেওয়া।',
    ],
  ];

  return (
    <section
      className="text-primary-foreground py-16 md:py-20 px-4 md:px-8 lg:px-12"
      style={{
        background:
          'linear-gradient(135deg, oklch(0.48 0.12 165) 0%, oklch(0.7 0.08 185) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            আমাদের মূল্যবোধ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            আমরা যা বিশ্বাস করি
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map(([icon, title, desc]) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-primary-foreground/75 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
