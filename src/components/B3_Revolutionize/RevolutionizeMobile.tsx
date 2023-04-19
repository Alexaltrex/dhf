import * as React from 'react';
import style from './Revolutionize.module.scss';
import {cards} from './cards';
// @ts-ignore
import videoUrl from '../../assets/webm/box.webm';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import src from "../../assets/png/box.png";
import {isSafari} from "../../helpers/helpers";

const title = 'Revolutionize Your Investing Experience with DHF';

gsap.registerPlugin(ScrollTrigger);

export const RevolutionizeMobile = ({scopeRef}: any) => {
    return (
        <div ref={scopeRef} className={`${style.revolutionize}`} id='Investing'>
            <div className={`${style.inner}`}>
                <h2 className={style.title}>{title}</h2>

                <div className={style.content}>
                    <div className={style.animationWrapper}>
                        {
                            isSafari() ? (
                                <img src={src} alt=""/>
                            ) : (
                                <video
                                    preload='auto'
                                    src={videoUrl}
                                    autoPlay
                                    muted={true}
                                    playsInline={true}
                                />
                            )
                        }
                    </div>

                    <div className={style.cards}>
                        {cards.map(({title, description}, key) => (
                            <div className={`${style.card}`} key={key}>
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
