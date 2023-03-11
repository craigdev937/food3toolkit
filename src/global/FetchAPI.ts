import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://www.themealdb.com/api/json/v1/1";
const URLID = "https://www.themealdb.com/api/json/v1/1";

class FetchAPI {
    getLetter = createAsyncThunk("letters/getLetter", 
    async (query: string) => {
        const res: Response = 
        await fetch(`${URL}/search.php?f=${query}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        console.log(data.meals);
        return [...data.meals];
    });

    getId = createAsyncThunk("ids/getId", 
    async (id: string) => {
        const res: Response =
        await fetch(`${URL}/lookup.php?i=${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.meals;
    });

    getCate = createAsyncThunk("categories/getCate", 
    async (category: string) => {
        const res: Response = 
        await fetch(`${URL}/filter.php?c=${category}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.meals;
    });
};

export const API: FetchAPI = new FetchAPI();


