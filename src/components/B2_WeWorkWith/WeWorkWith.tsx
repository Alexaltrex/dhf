import * as React from 'react';
import style from './WeWorkWith.module.scss';
import { svgIcons } from '../../assets/svgIcons';

export const WeWorkWith = () => {
  return (
    <div className={style.weWorkWith}>
      <div className={`container ${style.inner}`}>
        <h3 className={style.title}>We work with</h3>

        <div className={style.card}>
          <div className={style.rowMobile1}>
            <div className={style.cell}>{svgIcons.weWorkWith_0}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_1}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_2}</div>
          </div>
          <div className={style.rowMobile2}>
            <div className={style.cell}>{svgIcons.weWorkWith_3}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_4}</div>
          </div>
          <div className={style.rowDesktop}>
            <div className={style.cell}>{svgIcons.weWorkWith_0}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_1}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_2}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_3}</div>
            <div className={style.cell}>{svgIcons.weWorkWith_4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
