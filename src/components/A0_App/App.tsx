import React, { useEffect, useRef, useState } from 'react';
import style from './App.module.scss';
import { Decetralized } from '../B0_Decetralized/Decetralized';
import { Header } from '../A1_Header/Header';
import { BurgerMenu } from '../A2_BurgerMenu/BurgerMenu';
import { Invest } from '../B1_Invest/Invest';
import { WeWorkWith } from '../B2_WeWorkWith/WeWorkWith';
import { Revolutionize } from '../B3_Revolutionize/Revolutionize';
import { Tokenomics } from '../B4_Tokenomics/Tokenomics';
import { Distribution } from '../B5_Distribution/Distribution';
import { TeamSlider } from '../B6_Team/TeamSlider';
import { CallTo } from '../B7_CallTo/CallTo';
import { Footer } from '../A3_Footer/Footer';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/useStore';
import { useMediaQuery } from 'usehooks-ts';
import { RevolutionizeMobile } from '../B3_Revolutionize/RevolutionizeMobile';

export const App = observer(() => {
  const { setScrollDown, pageYOffset, setPageYOffset } = useStore();
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    const onScroll = (e: Event) => {
      if (window.pageYOffset > pageYOffset) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
      setPageYOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }, [pageYOffset]);

  return (
    <div className={`${style.app}`} id='Home'>
      <div className='scroller'>
        <BurgerMenu />

        <div className={style.blueBoxWrapper}>
          <Header />
          <Decetralized />
        </div>

        <Invest />
        <WeWorkWith />
        {isDesktop ? <Revolutionize /> : <RevolutionizeMobile />}
        <Tokenomics />
        <Distribution />
        <TeamSlider />
        <CallTo />

        <Footer />
      </div>
    </div>
  );
});
