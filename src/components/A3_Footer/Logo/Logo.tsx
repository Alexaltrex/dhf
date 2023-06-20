import style from './Logo.module.scss';
import logoSvg from '../../../assets/png/A1_Header/logo.svg';
import * as React from 'react';

export const Logo = () => {
  return (
    <div className={style.logo}>
      <p className={style.label}>
        <img src={logoSvg} alt='' />
      </p>
      <p className={style.text}>
        DHF is a decentralized blockchain project that no one person or entity
        owns. DHF is not responsible for losses or you may experience while
        using its website or platform and you use shall always use them at your
        own risk. No information on this website or platform should be
        considered financial advice. DHF should be considered high risk and you
        should not invest more money than you can afford to lose.
      </p>
    </div>
  );
};
