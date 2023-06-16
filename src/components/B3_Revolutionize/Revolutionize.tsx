import * as React from 'react';
import style from './Revolutionize.module.scss';
import { cards } from './cards';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const title = 'Revolutionize Your Investing Experience with DHF';

gsap.registerPlugin(ScrollTrigger);

export const Revolutionize = ({ scopeRef }: any) => {
  const cardsRef: any = React.useRef(null);
  const contentRef: any = React.useRef(null);
  const canvasRef: any = React.useRef(null);
  const [currentCardActive, setCurrentCardActive] = React.useState(0);

  React.useLayoutEffect(() => {
    let context = canvasRef.current.getContext('2d');
    canvasRef.current.width = 1920;
    canvasRef.current.height = 1080;

    let frameCount = 238;
    const currentFrame = (index: any) =>
      `./assets/sequence/${(index + 1).toString().padStart(4, '0')}.jpg`;

    let images: any = [];
    let airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      context.drawImage(images[airpods.frame], 0, 0);
    }

    let ctx = gsap.context(() => {
      gsap
        .timeline({
          onUpdate: render,
          scrollTrigger: {
            trigger: contentRef.current,
            pin: true,
            scrub: 0.5,
            markers: false,
            start: 'top - 100',
            end: '+=300%',

            onUpdate: (self) => {
              if (self.progress > 0.1666 && self.progress < 0.3332) {
                setCurrentCardActive(1);
              } else if (self.progress > 0.3332 && self.progress <= 0.4998) {
                setCurrentCardActive(2);
              } else if (self.progress > 0.4998 && self.progress <= 0.6646) {
                setCurrentCardActive(3);
              } else if (self.progress > 0.6664 && self.progress <= 0.833) {
                setCurrentCardActive(4);
              } else if (self.progress > 0.833 && self.progress <= 1) {
                setCurrentCardActive(5);
              } else {
                setCurrentCardActive(0);
              }
            },
          },
        })
        .to(
          airpods,
          {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            duration: 1,
          },
          0
        )
        .to(
          cardsRef.current,
          {
            yPercent: -35,
            duration: 1,
          },
          0
        );
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef} className={`${style.revolutionize}`} id='Investing'>
      <div className={`${style.inner}`}>
        <h2 className={style.title}>{title}</h2>

        <div ref={contentRef} className={style.content}>
          <div className={style.animationWrapper}>
            <canvas ref={canvasRef}></canvas>
          </div>

          <div ref={cardsRef} className={style.cards}>
            {cards.map(({ title, description }, key) => (
              <div
                className={`${style.card} ${
                  currentCardActive === key && style._active
                }`}
                key={key}
              >
                <p className={style.cardTitle}>{title}</p>
                <p className={style.cardDescription}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
