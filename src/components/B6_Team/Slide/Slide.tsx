import * as React from 'react';
import style from './Slide.module.scss';
import { FC } from 'react';
import { ISlide } from '../slides';
import clsx from 'clsx';

interface ISlideComponent extends ISlide {
  active: boolean;
  isSlider: boolean;
}

export const Slide: FC<ISlideComponent> = ({
  src,
  name,
  job,
  description,
  socials,
  active,
  isSlider,
}) => {
  return (
    <div
      className={clsx({
        [style.slide]: true,
        [style.slide_active]: active && isSlider,
      })}
    >
      <div className={style.wrapper}>
        <div className={style.top}>
          <img src={src} alt='' />

          <div className={style.socials}>
            {socials.map(({ icon, href }, key) => (
              <a
                key={key}
                href={href}
                className={style.link}
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className={style.bottom}>
          <p className={style.name}>{name}</p>
          <div className={style.job}>
            <p>{job}</p>
          </div>
          <p className={style.description}>{description}</p>

          <div className={style.socials}>
            {socials.map(({ icon, href }, key) => (
              <a
                key={key}
                href={href}
                className={style.link}
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
