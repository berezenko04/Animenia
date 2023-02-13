import { useEffect, useState, useCallback } from "react";
import throttle from 'lodash.throttle'


export const useWindowResize = (): number => {
    const [width, setWidth] = useState(window.innerWidth);


    const listener = useCallback(
        throttle(() => {
            setWidth(window.innerWidth);
        }, 200), []
    )

    useEffect(() => {
        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    return width;
}