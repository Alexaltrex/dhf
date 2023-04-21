import * as React from "react";
import style from "./Decetralized.module.scss";
import clsx from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {socialLinks} from "./socialLinks";
import {useAnimateNumber} from "../../hooks/useAnimateNumber";
// @ts-ignore
//import videoWebm from "../../assets/webm/eth.webm";
// @ts-ignore
import videoMp4 from "../../assets/mp4/eth.mp4";
import {isSafari} from "../../helpers/helpers";
import src from "../../assets/png/eth.png";
import {useMediaQuery} from "usehooks-ts";

const description = "DHF is a revolutionary protocol that allows anyone to easily access the benefits of virtual and IRL investments, with market experts handling the hard work for you."

export const Decetralized = () => {
    const {ref, getValue} = useAnimateNumber(500);

    const isDesktop = useMediaQuery('(min-width: 1440px)');

    return (
        <div className={style.decetralized} ref={ref}>

            <div className={style.content}>
                <div className={style.contentInner}>

                    <div className={style.cardsBlock}>

                        <p className={style.cardTitle}>
                            Building the future on the ETH Blockchain
                        </p>

                        <div className={style.videoWrapper}>
                            {
                                (!isDesktop && isSafari()) ? (
                                    <img src={src} alt=""/>
                                ) : (
                                    <video autoPlay={true}
                                           muted={true}
                                           playsInline={true}
                                           loop={true}
                                    >
                                        {/*<source src={videoWebm}/>*/}
                                        <source src={videoMp4}/>
                                    </video>
                                )
                            }
                        </div>


                        <div className={clsx(style.card, style.card_1, style.card_row)}>
                            <div className={style.left}>
                                <p className={style.label}>Initial treasury holdings</p>
                                <p className={style.value}>{`+$ ${getValue(50)},000`}</p>
                            </div>
                            <div className={style.icon}>
                                {svgIcons.arrow_up_break}
                            </div>
                        </div>

                        <div className={clsx(style.card, style.card_2, style.card_row)}>
                            <div className={style.icon}>
                                {svgIcons.shield_check}
                            </div>

                            <div className={style.left}>
                                <p className={style.value}>{`${getValue(100)}%`}</p>
                                <p className={style.label}>Safery investment</p>
                            </div>
                        </div>

                        <div className={clsx(style.card, style.card_3, style.card_column)}>
                            <p className={style.label}>Buy, Contribute and Earn</p>
                            <div className={style.item}>
                                <div className={style.icon}>
                                    {svgIcons.light}
                                </div>
                                <p className={style.itemLabel}>Start earn</p>
                            </div>
                        </div>


                    </div>

                    <div className={style.textsBlock}>

                        <h1 className={style.title}>
                            Decentralized Hedge Fund
                        </h1>

                        <p className={style.description}>
                            {description}
                        </p>

                        <div className={style.buttons}>
                            <button>
                                <p>CTA Button</p>
                            </button>
                            <button>
                                <p>Whitepaper</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.socialLinks}>

                <p className={style.label}>
                    Join Us
                </p>

                <div className={style.links}>
                    {
                        socialLinks.map(({href, icon_white}, key) => (
                            <a key={key}
                               href={href}
                               className={style.link}
                               target="_blank"
                               rel="noopener noreferrer nofollow"
                            >
                                {icon_white}
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
