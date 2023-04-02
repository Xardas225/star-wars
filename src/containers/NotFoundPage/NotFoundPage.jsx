import { useLocation } from "react-router";

const NotFoundPage = () => {
    let location = useLocation();

    return(
        <>
            Not Found <p>{location.pathname}</p>
        </>
    )
}

export default NotFoundPage;