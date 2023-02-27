import React from "react";
import { createBrowserRouter, 
    RouterProvider, Outlet } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Meals } from "../pages/Meals";
import { Recipe } from "../pages/Recipe";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Meals />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/:recipeId",
                element: <Recipe />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <Outlet />
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


