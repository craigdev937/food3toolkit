import { configureStore } from "@reduxjs/toolkit";
import { LetterReducer } from "./LetterSlice";
import { IDReducer } from "./IDSlice";

export const Reducer = configureStore({
    reducer: {
        letters: LetterReducer,
        ids: IDReducer,
        categories: () => "Meals by Categories!",
        mealsByName: () => "Meals by Name!",
        
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


