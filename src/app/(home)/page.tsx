import BookingForm from '@/components/custom/home/BookingForm';
import HajjPack from '@/components/custom/home/HajjPack';
import Hero from '@/components/custom/home/Hero';
import TrustBanner from '@/components/custom/home/TrustBanner';
import UmraPack from '@/components/custom/home/UmraPack';
import WhyWe from '@/components/custom/home/WhyWe';
import { FloatingButtons } from '@/components/custom/shared/FloatingButton';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBanner />
      <UmraPack />
      <HajjPack />
      <WhyWe />
      <BookingForm />
      <FloatingButtons />
    </div>
  );
}
