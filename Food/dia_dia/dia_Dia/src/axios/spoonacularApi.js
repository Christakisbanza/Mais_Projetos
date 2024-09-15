import axios from "axios";

const api_Key = 'ef0e05e5378d4b259875ac6e0c8daf66'
const base_URL = 'https://api.spoonacular.com/recipes'

const apiFetch = axios.create(
    {
        baseURL: base_URL,
        headers: {
            "Content-Type": "application/json"
        },
        params: {
            apiKey : api_Key
        }
    }
)

export default apiFetch