import Banner from '@/components/custom/about/Banner';
import CompanyIntro from '@/components/custom/about/CompanyIntro';
import HeadOffice from '@/components/custom/about/HeadOffice';
import PackageInfo from '@/components/custom/about/PackageInfo';
import Team from '@/components/custom/about/Team';
import Values from '@/components/custom/about/Values';
import HeroBanner from '@/components/custom/shared/HeroBanner';

const page = () => {
  return (
    <div>
      <HeroBanner
        heading="আমাদের সম্পর্কে"
        subheading="বিশ্বস্ততার সাথে পবিত্র হজ ও উমরাহ সম্পাদনে আপনার নির্ভরযোগ্য সঙ্গী।"
        breadcrumb="হোম &rsaquo; আমাদের সম্পর্কে"
      />
      <CompanyIntro />
      <Team />
      <HeadOffice />
      <PackageInfo />
      <Values />
    </div>
  );
};

export default page;
