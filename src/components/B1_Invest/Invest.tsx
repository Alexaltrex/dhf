import * as React from 'react';
import style from './Invest.module.scss';
import { useAnimateNumber } from '../../hooks/useAnimateNumber';
// @ts-ignore
import videoWebm from '../../assets/webm/safe.webm';
// @ts-ignore
import videoMp4 from '../../assets/mp4/safe.mp4';
import { isSafari } from '../../helpers/helpers';
import src from '../../assets/png/safe.png';
import { useMediaQuery } from 'usehooks-ts';
import Button from '../Button/Button';

export const Invest = () => {
  const { ref, getValue } = useAnimateNumber(500);

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  return (
    <div className={style.invest} id='Why us'>
      <div className={style.investInner}>
        <div className={style.videoWrapper}>
          {!isDesktop && isSafari() ? (
            <img src={src} alt='' />
          ) : (
            <video autoPlay={true} muted={true} playsInline={true} loop={true}>
              <source src={videoMp4} type='video/mp4; codecs="hvc1"' />
              <source src={videoWebm} type='video/webm' />
            </video>
          )}
        </div>

        <div className={style.second}>
          <h2 className={style.title}>
            Stake DHF, get xDHF <br /> and earn up to 150% while unlocking all
            the DHF benefits
          </h2>

          <div className={style.text}>
            <p>
              By staking your DHF tokens, you gain access to the skills and
              expertise of our seasoned trading professionals.{' '}
            </p>
            <p>
              Our analysts strategically invest treasury funds in various
              markets to generate sustainable fixed yields, allowing you to earn
              up to 25% APY without the hassle of managing your investments
              yourself.
            </p>
            <p>
              Focus on what you do best while we take care of the rest, ensuring
              you benefit from the lucrative world of DeFi
            </p>
          </div>

          <Button className={style.btn} title='Stake Now' isBlue />
        </div>
      </div>
    </div>
  );
};
