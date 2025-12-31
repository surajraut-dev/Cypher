'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel() {
  return (
     <Swiper
      spaceBetween={0}
      slidesPerView={1}
      style={{ width: '100vw', height: '100vh' }} // full screen
    >
      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/Concert1.jpg" alt="1" fill style={{ objectFit: 'cover' }} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/Concert2.jpg" alt="2" fill style={{ objectFit: 'cover' }} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/Concert3.jpg" alt="3" fill style={{ objectFit: 'cover' }} />
        </div>
      </SwiperSlide>
    </Swiper>

  );
}