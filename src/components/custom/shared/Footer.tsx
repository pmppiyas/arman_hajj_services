import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-teal-700 flex items-center justify-center text-white font-bold">
                আ
              </div>
              <div>
                <div className="font-bold">আরমান আবির হজ সার্ভিস</div>
                <div className="text-green-400 text-xs">লাইসেন্স নং: ১৪৬৭</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              বিশ্বস্ততার সাথে পবিত্র হজ ও উমরাহ সম্পাদনে আমরা আপনার নির্ভরযোগ্য
              সঙ্গী।
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-300">দ্রুত লিংক</h4>
            <div className="space-y-2">
              {[
                'উমরাহ প্যাকেজ',
                'হজ প্যাকেজ',
                'আমাদের সম্পর্কে',
                'যোগাযোগ',
                'FAQ',
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-300">যোগাযোগ</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>📍 ফুল পুকুরিয়া বাজার, গোবিন্দগঞ্জ, গাইবান্ধা</div>
              <div>📞 +880 1700-000000</div>
              <div>✉️ info@armanabir-hajj.com</div>
            </div>
          </div>
        </div>
        <div className="pt-6 text-center text-gray-500 text-xs">
          © ২০২৪ আরমান আবির হজ সার্ভিস। সর্বস্বত্ব সংরক্ষিত। লাইসেন্স নং: ১৪৬৭
        </div>
      </div>
    </footer>
  );
};

export default Footer;
