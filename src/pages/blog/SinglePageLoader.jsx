import "./loader_styles.css";

const SinglePageLoader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader">
                <div className="loader-circle"></div>
            </div>
        </div>
    )
}

export default SinglePageLoader;