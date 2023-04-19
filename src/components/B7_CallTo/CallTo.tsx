import * as React from "react";
import style from "./CallTo.module.scss";

export const CallTo = () => {
    return (
        <div className={style.callTo}>
            <div className={style.blueCard}>

                 <h2 className={style.title}>
                     Call To Action section
                 </h2>

                <p className={style.description}>
                    It can be a text calling for action, It can be a text calling for action, It can be a text calling for action
                </p>

                <button className={style.joinBtn}>
                    <p>Join DHF Community</p>
                </button>

            </div>
        </div>
    )
}
