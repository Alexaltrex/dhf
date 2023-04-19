import * as React from "react";
import style from "./Links.module.scss"
import {links} from "../../A1_Header/links";
import {HashLink} from "react-router-hash-link";

export const Links = () => {
    return (
        <div className={style.links}>

            <p className={style.label}>Discover</p>

            <nav className={style.nav}>
                {
                    links.map(({to, label}, key) => (
                        <HashLink key={key}
                                  smooth
                                  to={to}
                                  className={style.link}
                        >
                            {label}
                        </HashLink>
                    ))
                }
            </nav>
        </div>
    )
}
