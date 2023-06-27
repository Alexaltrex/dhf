import * as React from 'react';
import style from './Footer.module.scss';
import { Logo } from './Logo/Logo';
import { Links } from './Links/Links';
import { JoinUs } from './JoinUs/JoinUs';
import { BackToTop } from './BackToTop/BackToTop';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.inner}`}>
        <div className={style.footerMobile}>
          <Logo />

          <div className={style.middle}>
            <Links />

            <div className={style.right}>
              <JoinUs />
              <BackToTop />
            </div>
          </div>

          <p className={style.rights}>© 2023 Decentralized Hedge Fund</p>
        </div>

        <div className={style.footerDesktop}>
          <div className={style.top}>
            <Logo />
            <div className={style.right}>
              <div className={style.linksWrapper}>
                <Links />
              </div>

              <div className={style.right}>
                <JoinUs />
                <BackToTop />
              </div>
            </div>
          </div>

          <p className={style.rights}>© 2023 Decentralized Hedge Fund</p>
        </div>
      </div>
    </footer>
  );
};
