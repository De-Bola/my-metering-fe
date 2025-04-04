import axios from 'axios';

const GET_CUSTOMER_ENDPOINT = 'http://localhost:8080/api/customers/1';
const GET_CUSTOMER_BY_ID_ENDPOINT = 'http://localhost:8080/api/customers/';
const LOGIN_CUSTOMER_ENDPOINT = 'http://localhost:8080/api/login';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJaZWVzamFzZGRza2hhbnkiLCJpYXQiOjE3NDM3MzU5MjQsImV4cCI6MTc0MzczOTUyNH0.tcf_Zzd6B7A18rkIFWp1qJxhhCP_tCOASDLm0a2P7bZ_-ir_P7c4zyTtqrde2xKLeeXQ1TcxrjMsllp8axjCqw"; 

export const getCustomer = async () => axios.get(GET_CUSTOMER_ENDPOINT,   
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
);
export const loginCustomer = async (username, password) => {
  return axios.post(LOGIN_CUSTOMER_ENDPOINT, { username, password }, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
export const getCustomerById = async (customerId) => {
  return axios.get(GET_CUSTOMER_BY_ID_ENDPOINT + `${customerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
