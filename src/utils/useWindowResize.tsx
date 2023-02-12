import { useEffect, useState } from "react";


export const useWindowResize = (): number => {
    const [width, setWidth] = useState(window.innerWidth);

    const listener = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    return width;
}