import { useAnimateNumber } from '../../hooks/useAnimateNumber';
import style from './Staking.module.scss';
import textContent from './textContent';

const Staking = () => {
  const { ref, getValue } = useAnimateNumber(500);

  return (
    <div className={style.staking} ref={ref}>
      <div className={style.staking__title}>
        <div className={style.wrapper}>
          Single sided <br /> DHF Staking
        </div>
      </div>
      <div className={`${style.staking__title} ${style.staking__title_under}`}>
        <div className={style.wrapper}>
          DHF liquidity <br /> Staking
        </div>
      </div>
      <div className={style.stakingStats}>
        {textContent.stats.percentage[0].map((item, index): any => (
          <div key={index} className={style.stakingStats__item}>
            <div className={style.wrapper}>{getValue(item)}%</div>
          </div>
        ))}
      </div>
      <div className={style.stakingLine}>
        {textContent.stats.days.map((item, index): any => (
          <div key={index} className={style.stakingLine__item}>
            {item}
          </div>
        ))}
      </div>
      <div className={`${style.stakingStats} ${style.stakingStats_under}`}>
        {textContent.stats.percentage[1].map((item, index): any => (
          <div key={index} className={style.stakingStats__item}>
            <div className={style.wrapper}>{getValue(item)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staking;
