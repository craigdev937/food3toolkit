import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Main } from "../routes/Main";
import { Reducer } from "../global/Reducer";
import { Search } from "../pages/Search";

export const App = () => {
    return (
        <Provider store={Reducer}>
            <React.Fragment>
                <Search />
                <Main />
            </React.Fragment>
        </Provider>
    );
};


