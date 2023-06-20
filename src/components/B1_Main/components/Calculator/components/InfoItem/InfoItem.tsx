import style from './InfoItem.module.scss';

interface IInfoItem {
  className?: string;
  label: string;
  value: string;
}

const InfoItem = ({ className, label, value }: IInfoItem) => {
  return (
    <div className={`${style.info} ${className}`}>
      <div className={style.label}>{label}</div>
      <div className={style.value}>{value}</div>
    </div>
  );
};

export default InfoItem;
