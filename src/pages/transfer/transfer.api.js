import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;
const urlTranfer = `${process.env.BASE_API_URL}/transfer`;

export const getAccountList = () =>
  Axios.get(url).then((response) => {
    return response.data;
  });

  export const insertTransfer = dataTransfer => 
  Axios.post(urlTranfer, dataTransfer).then(response => {
      return response.data;
  })