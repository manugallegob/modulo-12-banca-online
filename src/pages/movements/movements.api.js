import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;
const urlAccount = `${process.env.BASE_API_URL}/account-list`;

export const getMovements = (id) =>
  Axios.get(url, {params: {accountId: id}}).then((response) => {
    return response.data;
  });

  export const getAccountDetails = (id) =>
  Axios.get(`${urlAccount}/${id}`).then((response) => {
    return response.data;
  });