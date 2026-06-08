import React from 'react';

const Reviews = () => {
  const REVIEWS = [
    {
      name: 'মোঃ রফিকুল ইসলাম',
      text: 'আলহামদুলিল্লাহ! অত্যন্ত সুন্দর সার্ভিস। সব কিছু সময়মতো হয়েছে।',
      stars: 5,
    },
    {
      name: 'বেগম সুলতানা',
      text: 'হোটেল থেকে মসজিদ খুব কাছে ছিল। টিম খুবই সহায়ক ছিল।',
      stars: 5,
    },
    {
      name: 'মোঃ কামাল হোসেন',
      text: 'VIP প্যাকেজে গিয়েছিলাম, সত্যিকারের VIP অভিজ্ঞতা পেয়েছি।',
      stars: 5,
    },
  ];

  function StarRating({ count }: { count: number }) {
    return (
      <div className="flex gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="text-amber-400 text-lg">
            ★
          </span>
        ))}
      </div>
    );
  }
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            রিভিউ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            আমাদের হাজিদের অভিজ্ঞতা
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
            >
              <StarRating count={r.stars} />
              <p className="text-gray-700 mt-4 leading-relaxed text-sm">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                  {r.name[0]}
                </div>
                <div className="font-semibold text-gray-800 text-sm">
                  {r.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
