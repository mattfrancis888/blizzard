import React, { useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";

import { useState, useEffect } from "react";

const useMeasure = () => {
    const ref = useRef<any>();
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [ro] = useState(
        //@ts-ignore
        () => new ResizeObserver(([entry]) => set(entry.contentRect))
    );
    // @ts-ignore
    // useEffect(() => (ro.observe(ref.current), ro.disconnect), []);
    useEffect(() => {
        if (!ref.current) return;
        //@ts-ignore
        ro.observe(ref.current);
        //@ts-ignore
        return () => ro.unobserve(ref.current);
    }, []);
    return [{ ref }, bounds];
};
export default useMeasure;
