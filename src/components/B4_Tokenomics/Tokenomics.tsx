import * as React from "react";
import style from "./Tokenomics.module.scss"
import {svgIcons} from "../../assets/svgIcons";

const description = "DHF offers a solution to this problem by creating a decentralized hedge fund that provides anyone with the opportunity to invest and benefit from a diverse portfolio of assets. By purchasing DHF, the protocol's native token, investors become shareholders of the treasury-owned assets";

export const Tokenomics = () => {
    return (
        <div className={style.tokenomics} id="Tokenomics">
            <div className={style.blueCard}>
                <div className={style.inner}>

                    <h3 className={style.title}>Tokenomics</h3>

                    <p className={style.text}>
                        Liquidity will be initially locked <span>for 10 years</span>, private and pre sale investors
                        together with team tokens will be vested with a <span>1 year lock</span> and <span>monthly unlocks</span>.
                        The protocol will accumulate revenue generated from the treasury
                        and <span>redistribute</span> them to shareholders.
                    </p>

                    <div className={style.bottom}>
                        {svgIcons.arrow_down}
                        <p className={style.description}>
                            {description}
                        </p>
                    </div>

                </div>
                {/*<div className={style.cornerRadius}/>*/}
            </div>
        </div>
    )
}
