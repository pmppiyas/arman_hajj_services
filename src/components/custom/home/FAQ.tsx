'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const FAQS = [
    {
      q: 'উমরাহ ভিসা কত দিনে পাওয়া যায়?',
      a: 'সাধারণত ৭–১০ কার্যদিবসের মধ্যে উমরাহ ভিসা প্রসেস হয়।',
    },
    {
      q: 'শিশুদের জন্য আলাদা চার্জ আছে কি?',
      a: '২ বছরের নিচে শিশুদের জন্য বিশেষ ছাড় রয়েছে। বিস্তারিত জানতে যোগাযোগ করুন।',
    },
    {
      q: 'কিস্তিতে পেমেন্ট করা যাবে?',
      a: 'হ্যাঁ, বিশেষ শর্তে কিস্তির সুবিধা পাওয়া যায়। আগ্রহীরা অফিসে যোগাযোগ করুন।',
    },
    {
      q: 'কতদিনের প্যাকেজ?',
      a: 'উমরাহ প্যাকেজ ১৪–২১ দিনের এবং হজ প্যাকেজ ৪০–৪৫ দিনের।',
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            সাধারণ প্রশ্ন
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            প্রায়ই জিজ্ঞাসিত প্রশ্নসমূহ
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-all"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span
                  className={`text-green-600 text-xl transition-transform ${faqOpen === i ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
              {faqOpen === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
