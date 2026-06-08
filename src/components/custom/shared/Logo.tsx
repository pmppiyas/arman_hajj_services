import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={assets.logo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>
      <div>
        <div className="font-bold text-balance text-sm leading-tight">
          আরমান আবির হজ সার্ভিস
        </div>
        <div className="text-xs text-green-600 font-medium">
          লাইসেন্স নং: ১৪৬৭
        </div>
      </div>
    </div>
  );
};

export default Logo;
