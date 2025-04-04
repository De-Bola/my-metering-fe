import axios from "axios";

const GET_MARKET_PRICE_ENDPOINT = "http://localhost:8080/api/market-price";

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJaZWVzamFzZGRza2hhbnkiLCJpYXQiOjE3NDM3MzU5MjQsImV4cCI6MTc0MzczOTUyNH0.tcf_Zzd6B7A18rkIFWp1qJxhhCP_tCOASDLm0a2P7bZ_-ir_P7c4zyTtqrde2xKLeeXQ1TcxrjMsllp8axjCqw"; 

export const getMarketPrice = async (startDateTime, endDateTime) => {
  return axios.get(GET_MARKET_PRICE_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${token}`
      },
    params: { startDateTime, endDateTime },
  });
};