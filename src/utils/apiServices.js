const URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5/';

export const apiGetRates = () => {
  return fetch(`${URL}`, {
    headers: {
      'Access-Control-Allow-Origin':'http://localhost:3000',
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
  },
  }).then(res => {
      console.log(res);
      return res.json();
  })
  .catch((err => {
    return Promise.reject(new Error('No exchange rates found'));
  }))
};
