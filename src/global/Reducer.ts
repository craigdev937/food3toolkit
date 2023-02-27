import { configureStore } from "@reduxjs/toolkit";
import { LetterReducer } from "./LetterSlice";

export const Reducer = configureStore({
    reducer: {
        letters: LetterReducer,
        mealsByName: () => "Meals by Name!",
        categories: () => "Meals by Categories!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


