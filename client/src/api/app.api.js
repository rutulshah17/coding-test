import axios from 'axios';

const DEFAULT_URL = "http://localhost:5000/api";

export const fetchCats = async () => {
    const { data } = await axios.get(`${DEFAULT_URL}/cats`);
    const cats = data.split(",");
    return cats;
}

export const fetchSharks = async () => {
    const { data } = await axios.get(`${DEFAULT_URL}/sharks`);
    const sharks = data.split(",");
    return sharks;
}

export const fetchBoth = async () => {
    const { data } = await axios.get(`${DEFAULT_URL}/both`);
    const both = data.split(",");
    return both;
}