import { useLocation } from "react-router-dom"

const TopScroll = () => {
    const { pathname } = useLocation()
   
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default TopScroll;