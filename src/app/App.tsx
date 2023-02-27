import React from "react";
import "./App.css";
import Colton from "@public/Colton.webp";

export const App = () => {
    return (
        <React.Fragment>
            <img
                alt="Colton McKivitz" src={Colton} 
                height="600px" width="auto"
            />
        </React.Fragment>
    );
};


