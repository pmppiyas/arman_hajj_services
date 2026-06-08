const WhyWe = () => {
  const reasons = [
    [
      '🏆',
      'সরকার অনুমোদিত',
      'লাইসেন্স নম্বর ১৪৬৭ সহ বাংলাদেশ সরকার কর্তৃক অনুমোদিত প্রতিষ্ঠান।',
    ],
    [
      '🤝',
      'বিশ্বস্ত সেবা',
      '১০+ বছরের অভিজ্ঞতায় হাজার হাজার পুণ্যার্থীকে সফলভাবে সেবা দিয়ে আসছি।',
    ],
    [
      '💰',
      'সাশ্রয়ী মূল্য',
      'সর্বোচ্চ সুবিধায় সাশ্রয়ী মূল্যে হজ ও উমরাহ প্যাকেজ অফার করা হয়।',
    ],
    [
      '🛡️',
      'ভিসা গ্যারান্টি',
      'আমাদের সাথে ভিসা প্রাপ্তির ক্ষেত্রে কোনো ঝামেলা নেই।',
    ],
    [
      '📞',
      '২৪/৭ সাপোর্ট',
      'সৌদি আরবে থাকাকালীন যেকোনো সমস্যায় আমরা সার্বক্ষণিক সহায়তা দিই।',
    ],
    ['🕌', 'অভিজ্ঞ গাইড', 'প্রতিটি গ্রুপে অভিজ্ঞ ও যোগ্য হজ গাইড থাকেন।'],
  ];

  return (
    <section
      className=" text-primary-foreground "
      style={{
        background:
          'linear-gradient(135deg, oklch(0.48 0.12 165) 0%, oklch(0.7 0.08 185) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            কেন আমরা?
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            কেন আমাদের বেছে নেবেন
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map(([icon, title, desc]) => (
            <div
              key={title}
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-6
                border border-white/20
                hover:bg-white/15
                hover:-translate-y-1
                transition-all
                duration-300
              "
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

export default WhyWe;
