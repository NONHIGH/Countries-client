import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    filtered: [],
    currentPage: 1,
    totalPages: 0
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        getCountries: (state, action) => {
            state.countries = action.payload
        },
        limitCountries: (state, action) => {
            console.log(action.payload);
            state.countries = action.payload.countries
            state.totalPages = action.payload.totalPages

        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }

})
export const { getCountries, limitCountries, setCurrentPage } = countrySlice.actions;
export default countrySlice.reducer;