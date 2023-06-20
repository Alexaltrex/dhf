import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import style from './Main.module.scss';
import Calculator from './components/Calculator/Calculator';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Text from './components/Text/Text';
import { useMediaQuery } from 'usehooks-ts';

import tokenImg1 from './assets/tokens/01.png';
import tokenImg2 from './assets/tokens/02.png';
import tokenImg3 from './assets/tokens/03.png';
import tokenImg4 from './assets/tokens/04.png';
import tokenImg1Mobile from './assets/tokens/01-mobile.png';
import tokenImg2Mobile from './assets/tokens/02-mobile.png';

const Main = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        {!isMobile && (
          <MouseParallaxContainer
            useWindowMouseEvents
            globalFactorX={0.1}
            globalFactorY={0.1}
            className={style.mainTokens}
          >
            <MouseParallaxChild
              className={style.mainTokens__item}
              factorX={0.1}
              factorY={0.2}
            >
              <img src={tokenImg1} alt='' />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={style.mainTokens__item}
              factorX={0.2}
              factorY={0.1}
            >
              <img src={tokenImg2} alt='' />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={style.mainTokens__item}
              factorX={0.1}
              factorY={0.2}
            >
              <img src={tokenImg3} alt='' />
            </MouseParallaxChild>
            <MouseParallaxChild
              className={style.mainTokens__item}
              factorX={0.2}
              factorY={0.1}
            >
              <img src={tokenImg4} alt='' />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        )}

        {isMobile && (
          <div className={style.mainBg}>
            <div className={style.mainBg__item}>
              <img src={tokenImg1Mobile} alt='' />
            </div>
            <div className={style.mainBg__item}>
              <img src={tokenImg2Mobile} alt='' />
            </div>
          </div>
        )}

        <div className={style.container}>
          <div className={style.mainBody}>
            <Text />
            <Calculator />
          </div>
        </div>

        {!isMobile && <SocialLinks />}
      </div>
    </div>
  );
};

export default Main;
