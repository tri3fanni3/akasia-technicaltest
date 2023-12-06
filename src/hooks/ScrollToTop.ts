import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return children;
};

export default ScrollToTop;