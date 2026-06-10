import BookingForm from '@/components/custom/home/BookingForm';
import FAQ from '@/components/custom/home/FAQ';
import Gallery from '@/components/custom/home/Gallery';
import HajjPack from '@/components/custom/home/HajjPack';
import Hero from '@/components/custom/home/Hero';
import TrustBanner from '@/components/custom/home/TrustBanner';
import UmraPack from '@/components/custom/home/UmraPack';
import WhyWe from '@/components/custom/home/WhyWe';
import FloatingButtons from '@/components/custom/shared/FloatingButton';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBanner />
      <UmraPack />
      <HajjPack />
      <Gallery />
      <WhyWe />
      <FAQ />
      <BookingForm />
      <FloatingButtons />
    </div>
  );
}
