import {useEffect, useRef, useState} from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

export const useAnimateNumber = (duration = 300) => {

    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 0.5
        }
    );
    const [isIntersected, setIsIntersected] = useState(false);
    useEffect(() => {
        if (isIntersecting) {
            setIsIntersected(true);
        }
    }, [isIntersecting]);

    const delta = 5;
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (isIntersected && time < duration) {
            setTimeout(() => {
                setTime(time + delta);
            }, delta)
        }
    }, [isIntersected, time])

    const getValue = (value: number) => Math.floor((time / duration) * value);

    return {duration, ref, time, getValue}
}
