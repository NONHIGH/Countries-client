import { configureStore } from '@reduxjs/toolkit';
import countries from './features/country/countrySlice';


const store = configureStore({
    reducer: {
        countries
    }
});

export default store;