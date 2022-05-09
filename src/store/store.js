import {combineReducers, configureStore } from "@reduxjs/toolkit";
import linksSlice from './linksSlice'

const rootReducer = combineReducers({
    links: linksSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});