import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Meals } from "../pages/Meals";
import { Info } from "../components/Info";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Meals />,
        errorElement: <NotFound />
    },
    {
        path: "/:recipeId",
        element: <Info />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


