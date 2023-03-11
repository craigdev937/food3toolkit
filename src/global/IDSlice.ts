import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IData, IDataState } from "../models/Interfaces";

const initialState: IDataState = {
    data: [],
    loading: false,
    error: null
};

const IDSlice = createSlice({
    name: "ids",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getId.rejected.toString(), 
        (state, action: PayloadAction<IDataState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.getId.pending, 
        (state) => {
            state.loading = true,
            state.error = null
        });
        builder.addCase(API.getId.fulfilled.type, 
        (state, action: PayloadAction<IData[]>) => {
            state.loading = false,
            state.data = action.payload
        });
    }
});

export const IDReducer = IDSlice.reducer;



