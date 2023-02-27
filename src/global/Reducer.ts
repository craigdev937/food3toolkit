import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        mealsByLetter: () => "Meals by First Letter!",
        mealsByName: () => "Meals by Name!",
        categories: () => "Meals by Categories!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


