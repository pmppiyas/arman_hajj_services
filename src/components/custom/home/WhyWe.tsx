import React from 'react';

const WhyWe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
            কেন আমরা?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            কেন আমাদের বেছে নেবেন
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
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
            [
              '🕌',
              'অভিজ্ঞ গাইড',
              'প্রতিটি গ্রুপে অভিজ্ঞ ও যোগ্য হজ গাইড থাকেন।',
            ],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
