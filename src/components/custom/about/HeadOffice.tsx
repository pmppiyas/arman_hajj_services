import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Building2 } from 'lucide-react';

const HeadOffice = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 px-4 md:px-8 lg:px-12 py-16 md:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="px-4 py-1">
            <Building2 className="h-3.5 w-3.5 mr-2" />
            হেড অফিস
          </Badge>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            আমাদের প্রধান অফিস
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            যেকোনো হজ ও উমরাহ সংক্রান্ত তথ্য, বুকিং অথবা পরামর্শের জন্য সরাসরি
            আমাদের অফিসে যোগাযোগ করতে পারেন।
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              bg-card
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            {/* Gradient Header */}
            <div className="h-32 bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-500" />

            <div className="relative px-8 pb-10">
              {/* Floating Icon */}
              <div className="flex justify-center -mt-12">
                <div
                  className="
                    h-24 w-24
                    rounded-full
                    bg-background
                    border-4
                    border-background
                    shadow-xl
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="text-center mt-6">
                <Badge className="mb-4">অফিস লোকেশন</Badge>

                <h3 className="text-2xl md:text-3xl font-bold">
                  ফুল পুকুরিয়া বাজার
                </h3>

                <p className="mt-3 text-muted-foreground text-lg">
                  গোবিন্দগঞ্জ, গাইবান্ধা
                </p>

                <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>নিজ জেলার প্রধান কার্যালয়</span>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="grid md:grid-cols-3 gap-4 mt-10">
                <Button asChild size="lg" className="rounded-xl">
                  <a
                    href="https://wa.me/8801754532121"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl"
                >
                  <a href="tel:01754532121">
                    <Phone className="mr-2 h-4 w-4" />
                    কল করুন
                  </a>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="rounded-xl"
                >
                  <a
                    href="https://maps.app.goo.gl/CBje7YdDVmGwPRbR7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    ম্যাপ দেখুন
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadOffice;
