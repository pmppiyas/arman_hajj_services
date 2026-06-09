'use client';

import { useState } from 'react';

type BookingFormData = {
  name: string;
  phone: string;
  passport: string;
  package: string;
  date: string;
  note: string;
};

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    passport: '',
    package: '',
    date: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  const inputFields: Array<[string, keyof BookingFormData, string, string]> = [
    ['text', 'name', 'আপনার নাম *', 'পূর্ণ নাম লিখুন'],
    ['tel', 'phone', 'মোবাইল নম্বর *', '০১XXXXXXXXX'],
    ['text', 'passport', 'পাসপোর্ট নম্বর (ঐচ্ছিক)', 'AB1234567'],
  ];

  return (
    <section className=" bg-linear-to-br from-gray-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
              যোগাযোগ
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-6">
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <div className="space-y-5">
              {[
                ['📍', 'ঠিকানা', 'ফুল পুকুরিয়া বাজার, গোবিন্দগঞ্জ, গাইবান্ধা'],
                ['👤', 'লাইসেন্স স্বত্বাধিকারী', 'মোঃ আনোয়ার হোসেন মন্ডল'],
                ['👤', 'ম্যানেজার', 'মোঃ রাকিবুল হাসান'],
                ['📞', 'ফোন', '+880 1700-000000'],
                ['💬', 'WhatsApp', '+880 1700-000000'],
                ['✉️', 'ইমেইল', 'info@armanabir-hajj.com'],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="text-white/50 text-xs">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://wa.me/8801700000000"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-center transition-all text-sm"
              >
                WhatsApp করুন
              </a>
              <a
                href="tel:+8801700000000"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-center transition-all text-sm"
              >
                Call করুন
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              অনলাইন বুকিং ফর্ম
            </h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  আলহামদুলিল্লাহ!
                </h4>
                <p className="text-gray-600">
                  আপনার তথ্য পাওয়া গেছে। আমরা শীঘ্রই যোগাযোগ করব।
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {inputFields.map(([type, key, label, placeholder]) => (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[key] || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    প্যাকেজ নির্বাচন
                  </label>
                  <select
                    value={formData.package}
                    onChange={(e) =>
                      setFormData({ ...formData, package: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-all"
                  >
                    <option value="">প্যাকেজ বেছে নিন</option>
                    <option>ইকোনমি উমরাহ (১,৩০,০০০৳)</option>
                    <option>প্রিমিয়াম উমরাহ (১,৫০,০০০৳)</option>
                    <option>VIP উমরাহ (২,০০,০০০৳)</option>
                    <option>সরকারি হজ (৫,৮৫,০০০৳)</option>
                    <option>বেসরকারি হজ (৭,৫০,০০০৳)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    যাত্রার সম্ভাব্য তারিখ
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    মন্তব্য
                  </label>
                  <textarea
                    rows={3}
                    placeholder="আপনার যেকোনো প্রশ্ন বা মন্তব্য..."
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-all resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg text-sm"
                >
                  বুকিং সাবমিট করুন →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
