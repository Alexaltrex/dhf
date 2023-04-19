import * as React from "react";
import style from "./JoinUs.module.scss";
import {socialLinks} from "../../B0_Decetralized/socialLinks";

export const JoinUs = () => {
    return (
        <div className={style.joinUs}>

            <p className={style.label}>
                Join Us
            </p>

            <div className={style.links}>
                {
                    socialLinks.map(({href, icon_dark}, key) => (
                        <a key={key}
                           href={href}
                           className={style.link}
                           target="_blank"
                           rel="noopener noreferrer nofollow"
                        >
                            {icon_dark}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
