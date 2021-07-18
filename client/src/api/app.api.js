import axios from 'axios';

const DEFAULT_URL = "http://localhost:5000/api";

export const fetchCats = async () => {
    const { data } = await axios.get(`${DEFAULT_URL}/cats`);
    return data;
}

export const fetchSharks = async () => {
    const { data } = await axios.get(`${DEFAULT_URL}/sharks`);
    return data;
}

export const fetchCatsAndSharks = async () => {
    const { data } = await axios.get(`${DEFAULT_URL}/both`);
    return data;
}