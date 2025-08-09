import { useEffect, useState } from "react";

const ScrollTracker = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrolled / totalHeight) * 100;
            setScrollWidth(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="scroll-tracker" style={{
            position: "fixed",
            top: "10vmin",
            width: `${scrollWidth}%`,
            height: "0.75vmin",
            transition: "width 0.1s ease-out"
        }} />
    );
};

export default ScrollTracker;
