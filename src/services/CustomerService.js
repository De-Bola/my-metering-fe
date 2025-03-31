import axios from 'axios';

const GET_CUSTOMER_ENDPOINT = 'http://localhost:8080/api/customers/92fadd5f-1f5b-4e7b-85a5-c70b81142172';
const GET_CUSTOMER_BY_ID_ENDPOINT = 'http://localhost:8080/api/customers/';
const LOGIN_CUSTOMER_ENDPOINT = 'http://localhost:8080/api/login';

export const getCustomer = async () => axios.get(GET_CUSTOMER_ENDPOINT);
export const loginCustomer = async (username, password) => {
  return axios.post(LOGIN_CUSTOMER_ENDPOINT, { username, password });
};
export const getCustomerById = async (customerId) => {
  return axios.get(GET_CUSTOMER_BY_ID_ENDPOINT + `${customerId}`);
};
