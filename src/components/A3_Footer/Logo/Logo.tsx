import style from "./Logo.module.scss"
import * as React from "react";

export const Logo = () => {
    return (
        <div className={style.logo}>
            <p className={style.label}>LOGO</p>
            <p className={style.text}>
                Text about the company in a few lines, text about the company in a few lines Text about the company in a few lines
            </p>
        </div>
    )
}
