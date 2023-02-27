import React from "react";
import { MealItems } from "../components/MealItems";
import { RecipeItems } from "../components/RecipeItems";

export const Meals = () => {
    return (
        <React.Fragment>
            <section className="main">
                <aside className="heading">
                    <h1>Search Food Recipe</h1>
                    <h4>Good food is just a click away.  
                        Come see what we have...😋</h4>
                </aside>
                <aside className="searchBox">
                    <input type="search" className="search__bar" />
                </aside>
                <aside className="container">
                    <MealItems />
                    <MealItems />
                    <MealItems />
                    <MealItems />
                    <MealItems />
                    <MealItems />
                </aside>
                <section className="indexContainer">
                    <RecipeItems />
                </section>
            </section>
        </React.Fragment>
    );
};



