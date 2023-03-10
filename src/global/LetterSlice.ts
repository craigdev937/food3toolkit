import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IData, IDataState } from "../models/Interfaces";

const initialState: IDataState = {
    data: [],
    loading: false,
    error: null
};

const LetterSlice = createSlice({
    name: "letters",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getLetter.rejected.toString(), 
        (state, action: PayloadAction<IDataState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getLetter.pending, 
        (state) => {
            state.loading = true,
            state.error = null
        });
        builder.addCase(API.getLetter.fulfilled.type, 
            (state, action: PayloadAction<IData[]>) => {
                state.loading = false,
                state.data = [...action.payload]
            });
    },
});

export const LetterReducer = LetterSlice.reducer;


