import * as React from 'react';
import style from './Header.module.scss';
import logoSvg from '../../assets/png/A1_Header/logo.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/useStore';
import { svgIcons } from '../../assets/svgIcons';
import { links } from './links';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
import Button from '../Button/Button';

export const Header = observer(() => {
  const { burgerMenu, setBurgerMenu, pageYOffset, scrollDown } = useStore();

  return (
    <header
      className={clsx({
        [style.header]: true,
        [style.header_scroll]: pageYOffset > 110,
        [style.header_hide]: pageYOffset > 110 && scrollDown && !burgerMenu,
      })}
    >
      <div className={style.logo}>
        <img src={logoSvg} alt='' />
        {/* <p>DHF</p> */}
      </div>

      <div className={style.links}>
        {links.map(({ to, label }, key) => (
          <HashLink key={key} smooth to={to} className={style.link}>
            {label}
          </HashLink>
        ))}
      </div>

      <div className={style.right}>
        <Button className={style.launchBtn} title='Launch App' />

        <button
          className={style.burgerBtn}
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          {burgerMenu ? svgIcons.close : svgIcons.burger}
        </button>
      </div>
    </header>
  );
});
