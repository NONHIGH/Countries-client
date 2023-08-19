import axios from 'axios';
import { getCountries, limitCountries, setCurrentPage } from './countrySlice';

const URL = 'http://localhost:3001/api/countries';

export const getAllCountries = () => async (dispatch) => {
    try {
        const response = (await axios.get(URL)).data;
        dispatch(getCountries(response));

    } catch (error) {
        alert('Error trying get the countries', error.message);
    }
}

export const getLimitedCountries = (page) => async (dispatch) => {
    try {
        const response = (await axios.get(`${URL}?page=${page}`))
        dispatch(limitCountries(response.data));
        dispatch(setCurrentPage(page));
    } catch (error) {
        alert('Error trying get countries limited', error.message)
    }
}