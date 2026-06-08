import Logo from '@/components/custom/shared/Logo';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div className="space-y-4">
            <Logo />
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
                  className="block text-gray-400 hover:text-white text-sm transition-colors w-max"
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
