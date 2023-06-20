import { textContent } from '../../textContent';
import style from './Text.module.scss';

const Text = () => {
  return (
    <div className={style.text}>
      <div className={style.text__label}>{textContent.label}</div>
      <div className={style.text__title}>
        <span>{textContent.title}</span>APR
      </div>
      <div className={style.text__subtitle}>{textContent.subtitle}</div>
    </div>
  );
};

export default Text;
