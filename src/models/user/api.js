const API_URL = 'https://6219cb2181d4074e85b19c98.mockapi.io/api';

export const fetchUserDetail = async id => {
  await fetch(API_URL + '/user/1')
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
};
