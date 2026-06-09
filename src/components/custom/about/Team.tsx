import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';

const Team = () => {
  const team = [
    {
      role: 'লাইসেন্স স্বত্বাধিকারী',
      name: 'মো: আনোয়ার হোসেন মন্ডল',
      mobile: '01754532121',
      channels: ['WhatsApp', 'ইমো', 'ডিরেক্ট কল'],
      initials: 'আ',
      photo: '',
      gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    },
    {
      role: 'ম্যানেজার',
      name: 'মো: রাকিবুল হাসান',
      mobile: '01750254841',
      channels: ['WhatsApp', 'ডিরেক্ট কল', 'ইমো'],
      initials: 'র',
      photo: '',
      gradient: 'from-blue-600 via-cyan-500 to-sky-500',
    },
  ];

  return (
    <section className="bg-background ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="px-4 py-1 text-sm">
            আমাদের টিম
          </Badge>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            অভিজ্ঞ নেতৃত্বের সাথে
            <span className="block mt-2 text-primary">আপনার পবিত্র সফর</span>
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            হজ ও উমরাহ যাত্রাকে নিরাপদ, স্বাচ্ছন্দ্যময় এবং স্মরণীয় করতে আমাদের
            অভিজ্ঞ টিম সর্বদা আপনার পাশে রয়েছে।
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card
              key={member.name}
              className="
                relative
                overflow-hidden
                border
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-1
              "
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>

              {/* Header */}
              <div
                className={`relative h-40 bg-gradient-to-br ${member.gradient}`}
              >
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-white/30 blur-xl" />

                    <Avatar className="h-32 w-32 border-4 border-background shadow-2xl">
                      <AvatarImage src={member.photo} />

                      <AvatarFallback className="text-4xl font-bold bg-white text-emerald-700">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="pt-20 pb-8 px-8 text-center">
                <Badge className="mb-4" variant="secondary">
                  {member.role}
                </Badge>

                <h3 className="text-2xl font-bold">{member.name}</h3>

                <div className="flex items-center justify-center gap-2 mt-3 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    লাইসেন্সপ্রাপ্ত প্রতিনিধি
                  </span>
                </div>

                <a
                  href={`tel:${member.mobile}`}
                  className="block mt-5 text-lg font-semibold hover:text-primary transition-colors"
                >
                  📞 {member.mobile}
                </a>

                {/* Channels */}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {member.channels.map((channel) => (
                    <Badge key={channel} variant="outline">
                      {channel}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  <Button asChild className="rounded-xl">
                    <a
                      href={`https://wa.me/88${member.mobile}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="rounded-xl">
                    <a href={`tel:${member.mobile}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      কল করুন
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
