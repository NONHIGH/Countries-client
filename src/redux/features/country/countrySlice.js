import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    currentPage: 1,
    totalPages: 0,
    allCoutries: [],
    filters: {
        continent: "all",
        activity: "all",
    },
    orderActive: {
        by: "population",
        order: "asc",
    },
    searchByName: [],
    detailCountry: null,
    selectedCountryIds: [],
    created: {}
};

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        getCountries: (state, action) => {
            state.countries = action.payload;
            state.allCoutries = action.payload;
            state.totalPages = Math.ceil(action.payload.length / 10);
        },
        resetCountries: (state) => {
            state.countries = state.allCoutries;
            state.filters = {
                continent: 'all',
                activity: 'all'
            }
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setContinentFilter: (state, action) => {
            state.filters.continent = action.payload;
        },
        setOrder: (state, action) => {
            state.orderActive = action.payload;
        },
        orderCountriesBy: (state, action) => {
            state.orderActive = action.payload;
            const { by, order } = action.payload;

            state.countries = [...state.countries].sort((a, b) => {
                if (by === "name") {
                    return order === "asc"
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name);
                } else if (by === "population") {
                    return order === "asc"
                        ? a.population - b.population
                        : b.population - a.population;
                }
                return 0;
            });
        },
        getCountriesByName: (state, action) => {
            state.countries = action.payload;
            state.currentPage = 1;
        },
        getCountryById: (state, action) => {
            state.detailCountry = action.payload;
        },
        resetCountryById: (state) => {
            state.detailCountry = {}
        },
        setSelectedCountryIds: (state, action) => {
            state.selectedCountryIds = action.payload;
        },
        setCreated: (state, action) => {
            state.created = action.payload
        }

    },
});

export const {
    getCountries,
    orderCountriesBy,
    setContinentFilter,
    setCurrentPage,
    setOrder,
    getCountriesByName,
    getCountryById,
    resetCountries,
    resetCountryById,
    setSelectedCountryIds,
    setCreated,


} = countrySlice.actions;

export default countrySlice.reducer;
