import * as React from "react";
import style from "./Invest.module.scss";
import {useAnimateNumber} from "../../hooks/useAnimateNumber";
// @ts-ignore
import videoWebm from "../../assets/webm/safe.webm";
// @ts-ignore
import videoMp4 from "../../assets/mp4/safe.mp4";
import {isSafari} from "../../helpers/helpers";
import src from "../../assets/png/safe.png";
import {useMediaQuery} from "usehooks-ts";

const title = "Invest without hassle. Let DHF analysts manage investments on your behalf";

export const Invest = () => {
    const {ref, getValue} = useAnimateNumber(500);

    const isDesktop = useMediaQuery('(min-width: 1440px)');

    return (
        <div className={style.invest} id="Why us">
            <div className={style.investInner}>

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
                                <source src={videoMp4} type='video/mp4; codecs="hvc1"'/>
                                <source src={videoWebm} type='video/webm'/>

                            </video>
                        )
                    }
                </div>

                <div className={style.second}>
                    <h2 className={style.title}>
                        {title}
                    </h2>

                    <div className={style.blocks} ref={ref}>
                        <div className={style.block}>
                            <div className={style.gradient}/>
                            <p className={style.value}>
                                {`+$${getValue(50)},000`}
                            </p>
                            <p className={style.text}>
                                Initial treasury holdings that power DHF investments across multiple sectors
                            </p>
                        </div>
                        <div className={style.block}>
                            <div className={style.gradient}/>
                            <p className={style.value}>
                                {`${getValue(5)}-${getValue(20)}%`}
                            </p>
                            <p className={style.text}>
                                Average Return On Investment of our treasury between the combined sectors
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
