import * as React from "react";
import style from "./BackToTop.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {HashLink} from "react-router-hash-link";

export const BackToTop = () => {
    return (
        <div className={style.backToTop}>
            <p className={style.label}>Back to top</p>

            <HashLink className={style.btn}
                      to="#Home"
                      smooth
            >
                {svgIcons.arrow_up}
            </HashLink>
        </div>
    )
}
