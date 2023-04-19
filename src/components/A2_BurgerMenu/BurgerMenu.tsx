import * as React from "react";
import style from "./BurgerMenu.module.scss";
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import logo from "../../assets/png/A1_Header/logo.png";
import {svgIcons} from "../../assets/svgIcons";
import {socialLinks} from "../B0_Decetralized/socialLinks";
import {links} from "../A1_Header/links";
import {HashLink} from "react-router-hash-link";

export const BurgerMenu = observer(() => {
    const { burgerMenu, setBurgerMenu } = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>
            <div className={style.inner}>
                {/*<div className={style.header}>*/}
                {/*    <div className={style.logo}>*/}
                {/*        <img src={logo} alt=""/>*/}
                {/*        <p>DHF</p>*/}
                {/*    </div>*/}

                {/*    <div className={style.right}>*/}
                {/*        <button className={style.launch}>*/}
                {/*            <p>Launch App</p>*/}
                {/*        </button>*/}

                {/*        <button className={style.burgerBtn}*/}
                {/*                onClick={() => setBurgerMenu(!burgerMenu)}*/}
                {/*        >*/}
                {/*            {*/}
                {/*                burgerMenu ? svgIcons.close : svgIcons.burger*/}
                {/*            }*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={style.links}>
                    {
                        links.map(({to, label}, key) => (
                            <HashLink key={key}
                                      smooth
                                      to={to}
                                      className={style.link}
                                      onClick={() => setBurgerMenu(false)}
                            >
                                {label}
                            </HashLink>
                        ))
                    }
                </div>

                <div className={style.socialLinksWrapper}>

                    <p className={style.label}>
                        Join Us
                    </p>

                    <div className={style.socialLinks}>
                        {
                            socialLinks.map(({href, icon_dark}, key) => (
                                <a key={key}
                                   href={href}
                                   className={style.link}
                                   target="_blank"
                                   rel="noopener noreferrer nofollow"
                                   onClick={() => setBurgerMenu(false)}
                                >
                                    {icon_dark}
                                </a>
                            ))
                        }
                    </div>

                </div>
            </div>

        </div>
    )
})
