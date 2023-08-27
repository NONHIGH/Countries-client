import axios from 'axios';
import { getCountries, getCountriesByName, getCountryById, setCreated } from './countrySlice';

const URL = 'http://localhost:3001/api';

export const getAllCountries = () => async (dispatch) => {
    try {
        const response = (await axios.get(`${URL}/countries`)).data;
        dispatch(getCountries(response));

    } catch (error) {
        alert('Error trying get the countries', error.message);
    }
}


export const getCountriesFilterByName = (name) => async (dispatch) => {
    try {
        const regexNumbers = /\d/;
        if (regexNumbers.test(name)) {
            alert('The input dont must have numbers');
        }
        if (name.length < 3) {
            return;
        }
        const response = (await axios.get(`${URL}/countries?name=${name}`));
        dispatch(getCountriesByName(response.data));

    } catch (error) {
        alert('Error searching countries', error.message);
    }
}

export const getCountryByIdFromApi = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${URL}/countries/${id}`
        );
        dispatch(getCountryById(response.data));

    } catch (error) {
        alert(error.message, 'Someone occurred with the request to api');
        console.log(error.message);
    }
};

export const sendForm = (form) => async (dispatch) => {
    try {
        const response = await axios.post(`${URL}/activities`, form);
        dispatch(setCreated(response.data));
        return response.data;
    } catch (error) {
        alert(error.message)
        throw error;
        //heredo el error al form
    }
}