'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IGallaryImage } from '@/interfaces';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<IGallaryImage | null>(
    null
  );
  const [filter, setFilter] = useState('all');

  const GALLERY_IMAGES: IGallaryImage[] = [
    {
      id: 1,
      src: 'https://i.ibb.co.com/rKYvGYYP/pexels-fahadputhawala-34981839-1.jpg',
      title: 'কাবা শরীফ',
      category: 'makkah',
      description: 'পবিত্র কাবা শরীফের অত্যাশ্চর্য দৃশ্য',
      width: 600,
      height: 400,
    },
    {
      id: 2,
      src: 'https://i.ibb.co.com/9k9Z1d4s/pexels-rushdi-fatani-782816372-19042358.jpg',
      title: 'মসজিদে নববী',
      category: 'madinah',
      description: 'মদিনার মসজিদে নববীর সবুজ গম্বুজ',
      width: 600,
      height: 400,
    },
    {
      id: 3,
      src: 'https://i.ibb.co.com/BKK8jLPf/pexels-shameer-vayalakkad-hydrose-2602409-20681716.jpg',
      title: 'হজ্জযাত্রী',
      category: 'hajj',
      description: 'হজ্জের সময় আরাফাতের ময়দান',
      width: 600,
      height: 400,
    },
    {
      id: 4,
      src: 'https://i.ibb.co.com/NnCQPxxd/pexels-drmkhawarnazir-18996588.jpg',
      title: 'উমরাহ পালন',
      category: 'umrah',
      description: 'তাওয়াফরত অবস্থায় পুণ্যার্থী',
      width: 600,
      height: 400,
    },
    {
      id: 5,
      src: 'https://i.ibb.co.com/RXHcHWY/zamzam-water-20240510-151913668.jpg',
      title: 'জমজম কূপ',
      category: 'makkah',
      description: 'পবিত্র জমজমের পানি',
      width: 600,
      height: 400,
    },
    {
      id: 6,
      src: 'https://i.ibb.co.com/YFZGfmwy/mosquee-de-quba.jpg',
      title: 'মসজিদে কুবা',
      category: 'madinah',
      description: 'মদিনার প্রথম মসজিদ',
      width: 600,
      height: 400,
    },
    {
      id: 7,
      src: 'https://i.ibb.co.com/8D0F2Tsb/pexels-mohamed-hamdi-510308652-30698843.jpg',
      title: 'সাফা-মারওয়া',
      category: 'umrah',
      description: 'সাফা ও মারওয়া পাহাড়ের মাঝে সাঈ',
      width: 600,
      height: 400,
    },
    {
      id: 8,
      src: 'https://i.ibb.co.com/5WpMJQ2t/pexels-yasirgurbuz-12765598-2.jpg',
      title: 'আরাফাতের ময়দান',
      category: 'hajj',
      description: 'হজ্জের প্রধান স্থান আরাফাত',
      width: 600,
      height: 400,
    },
  ];

  const categories = [
    { id: 'all', name: 'সব', icon: '🕌' },
    { id: 'makkah', name: 'মক্কা', icon: '🕋' },
    { id: 'madinah', name: 'মদিনা', icon: '📿' },
    { id: 'hajj', name: 'হজ', icon: '🏕️' },
    { id: 'umrah', name: 'উমরাহ', icon: '🤲' },
  ];

  const filteredImages =
    filter === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            আমাদের গ্যালারি
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            পবিত্র স্থানের স্মৃতিচিহ্ন
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            আমাদের সেবার মাধ্যমে আপনার চোখের সামনে পবিত্র স্থানগুলোর অপূর্ব
            দৃশ্য
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
                flex items-center gap-2
                ${
                  filter === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105'
                }
              `}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-md"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {categories.find((c) => c.id === image.category)?.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300">
            <span>আরও ছবি দেখুন</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Next.js Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-card rounded-lg overflow-hidden transform transition-all duration-300 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md text-white rounded-full p-2 hover:bg-black/70 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full h-[70vh] bg-muted">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="p-6 bg-card">
              <h3 className="text-2xl font-bold text-foreground">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground mt-2">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
