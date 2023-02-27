import React from "react";
import { MealItems } from "../components/MealItems";
import { RecipeItems } from "../components/RecipeItems";
import { IMLetter } from "../models/Interfaces";
const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export const Meals = () => {
    const [url, setUrl] = React.useState(URL);
    const [item, setItem] = React.useState<IMLetter[]>([]);
    const [show, setShow] = React.useState(false);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            setItem(data.meals);
            setShow(true);
        })
    }, [url]);
    
    const setIndex = (alpha: string) => {
        setUrl(`${URL}?f=${alpha}`);
    };

    const searchRecipe = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(`${URL}?s=${search}`);
        setSearch(event.target.value);
    };

    return (
        <React.Fragment>
            <section className="main">
                <aside className="heading">
                    <h1>Good Meals</h1>
                    <h4>Delicious food is just a click away.  
                        Come see what we have...😋</h4>
                </aside>
                <aside className="searchBox">
                    <input 
                        type="search" 
                        className="search__bar" 
                        onChange={searchRecipe}
                    />
                </aside>
                <aside className="container">
                    {
                        show ? 
                            <MealItems data={item} /> : 
                            "Not Found!"
                    }
                </aside>
                <section className="indexContainer">
                    <RecipeItems 
                        alphaIndex={(alpha: string) => 
                            setIndex(alpha)} 
                    />
                </section>
            </section>
        </React.Fragment>
    );
};



