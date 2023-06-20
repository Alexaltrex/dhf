import { useState, useEffect } from 'react';
import Button from '../../../Button/Button';
import Select from '../../../Select/Select';
import { LightSvg } from '../../assets/light';
import style from './Calculator.module.scss';
import InfoItem from './components/InfoItem/InfoItem';

const Calculator = () => {
  const [period, setPeriod] = useState(14);
  const [percentage, setPercentage] = useState(8);
  const [tokenType, setTokenType] = useState('DHF');
  const [invested, setInvested] = useState({
    tokens: '100,000',
    usd: '644.42',
  });
  const [earn, setEarn] = useState({
    tokens: '8,000',
    usd: '40.08',
  });

  const [stakingValues, setStakingValues] = useState([
    { value: 'Single Sided', isSelected: true },
    { value: 'Liquidity Staking', isSelected: false },
  ]);
  const [lockupValues, setLockupValues] = useState([
    { value: '0 days', isSelected: false },
    { value: '14 days', isSelected: true },
    { value: '120 days', isSelected: false },
    { value: '240 days', isSelected: false },
    { value: '360 days', isSelected: false },
  ]);

  const handleStakingSelect = (innerItem: any) => {
    const newValues: any = stakingValues.map((item) => {
      if (item.value === innerItem.value) {
        return { value: item.value, isSelected: true };
      } else {
        return { value: item.value, isSelected: false };
      }
    });

    setStakingValues(newValues);
  };

  const handleLockupSelect = (innerItem: any) => {
    const newValues: any = lockupValues.map((item) => {
      if (item.value === innerItem.value) {
        return { value: item.value, isSelected: true };
      } else {
        return { value: item.value, isSelected: false };
      }
    });

    setLockupValues(newValues);

    setPeriod(+innerItem.value.split(' ')[0]);
  };

  const handlePercent = () => {
    if (period === 0) {
      setPercentage(stakingValues[0].isSelected ? 4 : 8);
    } else if (period === 14) {
      setPercentage(stakingValues[0].isSelected ? 8 : 15);
    } else if (period === 120) {
      setPercentage(stakingValues[0].isSelected ? 12 : 25);
    } else if (period === 240) {
      setPercentage(stakingValues[0].isSelected ? 20 : 35);
    } else if (period === 360) {
      setPercentage(stakingValues[0].isSelected ? 35 : 50);
    }
  };
  const handleInvested = () => {
    setInvested({
      tokens: `${stakingValues[0].isSelected ? '100,000' : '100'}`,
      usd: `${stakingValues[0].isSelected ? '644.42' : '688.16'}`,
    });
  };
  const calculateEarn = () => {
    setEarn({
      tokens: String(100000 * (percentage / 100)).replace(
        /(?=\B(?:\d{3})+(?!\d))/g,
        ','
      ),
      usd: String(((100000 * (percentage / 100)) / 198).toFixed(2)),
    });
  };

  useEffect(() => {
    handlePercent();
    handleInvested();
    calculateEarn();
  }, [period, stakingValues, lockupValues, percentage]);

  return (
    <div className={style.calculator}>
      <div className={style.calculator__title}>
        How much will I earn? {LightSvg}
      </div>
      <div className={style.calculatorSelects}>
        <Select
          label='Staking'
          values={stakingValues}
          className={style.calculatorSelects__item}
          handle={handleStakingSelect}
        />
        <Select
          label='Lockup Commitment'
          values={lockupValues}
          className={style.calculatorSelects__item}
          handle={handleLockupSelect}
        />
      </div>
      <div className={style.calculatorInfo}>
        <InfoItem
          className={style.calculatorInfo__item}
          label={'APR'}
          value={`${percentage}% APR`}
        />
        <InfoItem
          className={style.calculatorInfo__item}
          label={`${tokenType} Invested`}
          value={`${invested.tokens} ${tokenType} ($${invested.usd} USD)`}
        />
        <InfoItem
          className={style.calculatorInfo__item}
          label={'After 1 year you will earn'}
          value={`${earn.tokens} DHF($${earn.usd} USD)`}
        />
      </div>
      <div className={style.calculatorBtns}>
        <Button
          isBlue
          className={style.calculatorBtns__item}
          title='Buy DHF on Uniswap'
        />
        <Button className={style.calculatorBtns__item} title='Stake Now' />
      </div>
    </div>
  );
};

export default Calculator;
