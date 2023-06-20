import style from './Button.module.scss';
import { ArrowSvg } from './assets/arrow';

interface IButton {
  className?: string;
  title: string;
  isBlue?: boolean;
  withArrow?: boolean;
}

const Button = ({ className, title, isBlue, withArrow }: IButton) => {
  return (
    <button
      className={`${style.button} ${isBlue && style.button_blue} ${className}`}
    >
      <div className={style.inner}>
        <div className={style.wrapper}>
          {title}
          {(isBlue || withArrow) && ArrowSvg}
        </div>
      </div>
    </button>
  );
};

export default Button;
