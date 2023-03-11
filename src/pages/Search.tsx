import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";

export const Search = () => {
    const [query, setQuery] = React.useState("");
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.letters.loading);
    const allLetters = useAppSelector((state) => state.letters.data);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(API.getLetter(query));
        setQuery("");
    };

    if (loading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <h1>Search by Letter</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={query}
                        placeholder="Type a letter"
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>
            <section>
                {allLetters.map((search) => (
                    <aside key={search.idMeal}>
                        <h1>{search.strMeal}</h1>
                        <img 
                            alt={search.strMeal}
                            src={search.strMealThumb} 
                        />
                    </aside>
                ))}
            </section>
        </React.Fragment>
    );
};

