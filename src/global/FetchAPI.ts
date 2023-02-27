import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

class FetchAPI {
    getLetter = createAsyncThunk("mealsByLetter/getLetter", 
    async (query: string) => {
        const res: Response = 
        await fetch(`${URL}?f=${query}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        console.log(data.meals);
        return [...data.meals];
    });
};

export const API: FetchAPI = new FetchAPI();


