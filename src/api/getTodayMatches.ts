import axios from "axios";

// const API_KEY = "59b0087742b54d63a3dd29b388523709";
// const BASE_URL = "https://api.football-data.org/v4/matches";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_API_URL
export async function getTodayMactches() {
    try {
      const response = await axios.get(`${BASE_URL}matches`, {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      });
     return response.data;
    } catch (error) {
      console.error(error);
    }
  }