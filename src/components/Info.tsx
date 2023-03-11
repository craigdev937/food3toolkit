import React from "react";
import { useParams } from "react-router-dom";
import { IData } from "../models/Interfaces";
const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php";

export const Info = () => {
    const [item, setItem] = React.useState<IData>();
    const { MealId } = useParams();
    const mealID = MealId !== undefined ? String(MealId) : "";

    {
        if (mealID) {
            fetch(`${URL}?i=${mealID}`)
            .then((res) => res.json())
            .then(data => {
                setItem(data.meals[0]);
            })
        }
    };

    return (
        <React.Fragment>
            {
                (!item) ? "" : (
                    <React.Fragment>
                        <section className="content">
                            <img 
                                alt={item.strMeal} 
                                src={item.strMealThumb}
                            />
                        </section>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};


