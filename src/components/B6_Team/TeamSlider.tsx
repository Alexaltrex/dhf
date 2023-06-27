import * as React from 'react';
import style from './TeamSlider.module.scss';
import { slides } from './slides';
import { Slide } from './Slide/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperClass from 'swiper/types/swiper-class';
import { useState } from 'react';

export const TeamSlider = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <div className={style.teamSlider} id='Team'>
      <h2 className={style.title}>Team</h2>

      <div className={style.swiperMobile}>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={16}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          onSlideChange={(swiper) => {
            setIndex(swiper.realIndex);
          }}
          className={style.sliderItem}
        >
          {slides.map((slide, key) => (
            <SwiperSlide key={key} className={style.swiperSlide}>
              <Slide {...slide} active={key === index} isSlider={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={style.cardsDesktop}>
        <div className={`container ${style.inner}`}>
          {slides.map((slide, key) => (
            <Slide
              key={key}
              {...slide}
              active={key === index}
              isSlider={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
