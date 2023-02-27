import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IMLetter, IMLetterState } from "../models/Interfaces";

const initialState: IMLetterState = {
    letters: [],
    loading: false,
    error: null
};

const LetterSlice = createSlice({
    name: "letters",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getLetter.rejected.type, 
        (state, action: PayloadAction<IMLetterState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getLetter.pending, 
        (state) => {
            state.loading = true,
            state.error = null
        });
        builder.addCase(API.getLetter.fulfilled.type, 
            (state, action: PayloadAction<IMLetter[]>) => {
                state.loading = false,
                state.letters = [...action.payload]
            });
    },
});

export const LetterReducer = LetterSlice.reducer;


