import { useState } from 'react';
import style from './Select.module.scss';
import ArrowSvg from './assets/arrow';

interface ISelect {
  className?: string;
  label: string;
  values: any;
  handle: any;
}

const Select = ({ className, label, values, handle }: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={`${style.select} ${isOpen && style.isOpen} ${className}`}
    >
      <div className={style.selectBtn}>
        <div className={style.selectBtn__label}>{label}</div>
        <div className={style.selectBtn__selected}>
          {values.filter((item: any, index: any) => item.isSelected)[0].value}
        </div>
        {ArrowSvg}
      </div>
      <div className={style.selectList}>
        {values.map((item: any, index: any) => (
          <div
            onClick={() => handle(item)}
            key={index}
            className={`${style.selectList__item} ${
              item.isSelected && style.isSelected
            }`}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
