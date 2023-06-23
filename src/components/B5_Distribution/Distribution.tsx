import * as React from 'react';
import style from './Distribution.module.scss';
import { list } from './list';
import { useAnimateNumber } from '../../hooks/useAnimateNumber';
// @ts-ignore
import videoWebm from '../../assets/webm/chart.webm';
// @ts-ignore
import videoMp4 from '../../assets/mp4/chart.mp4';
import { isSafari } from '../../helpers/helpers';
import src from '../../assets/png/chart.png';
import { useMediaQuery } from 'usehooks-ts';

export const Distribution = () => {
  const { ref, getValue } = useAnimateNumber(500);

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  return (
    <div className={style.distribution} id='Distribution'>
      <div className={style.inner}>
        <h2 className={style.title}>Distribution</h2>

        <div className={style.content}>
          <div className={style.animWrapper}>
            {!isDesktop ? (
              <img src={src} alt='' />
            ) : (
              <video
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
              >
                <source src={videoWebm} />
                <source src={videoMp4} />
              </video>
            )}
          </div>

          <div className={style.listCard}>
            <p className={style.listTitle}>Every month will go to:</p>

            <div className={style.list} ref={ref}>
              {list.map(({ value, label }, key) => (
                <div className={style.listItem} key={key}>
                  <div className={style.dot} />
                  <div className={style.texts}>
                    <p className={style.value}>{getValue(value)}%</p>
                    <p className={style.label}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
