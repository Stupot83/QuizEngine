import React from "react";
import Logo from "../Logo-loading.png";
import "../sass/Loading.scss";

const Loading = () => {
    return (
        <div className="Logo_container">
            <img className="Logo_loading" src={Logo} alt="Loading..." />
        </div>
    );
};

export default Loading;
