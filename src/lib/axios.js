import axios from "axios";

const base_url = process.env.API_BASE_URL;
const api_token = process.env.API_KEY

const api = axios.create({
  baseURL: base_url,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${api_token}`
  }
});

export default api;