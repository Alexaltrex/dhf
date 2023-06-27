import * as React from 'react';
import style from './CallTo.module.scss';
import Button from '../Button/Button';

export const CallTo = () => {
  return (
    <div className={style.callTo}>
      <div className='container'>
        <div className={style.blueCard}>
          <h2 className={style.title}>Step into the future with DHF</h2>

          <p className={style.description}>
            Join us on a journey to reshape the conventional hedge fund
            industry, dismantling barriers and democratizing the world of
            finance to empower the everyday individual like never before.
          </p>

          <Button
            className={style.joinBtn}
            withArrow
            title='Join DHF Community'
          />
          {/* <button className={style.joinBtn}>
          <p>Join DHF Community</p>
        </button> */}
        </div>
      </div>
    </div>
  );
};
