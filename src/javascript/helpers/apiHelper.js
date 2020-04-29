import { fightersDetails, fighters } from './mockData';

const API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';
const useMockAPI = true;

async function callApi(endpoind, method) {
  const url = API_URL + endpoind;
  const options = {
    method,
  };

  return useMockAPI
    ? fakeCallApi(endpoind)
    : fetch(url, options)
        .then((response) => (response.ok ? response.json() : Promise.reject(Error('Failed to load'))))
        .then((result) => JSON.parse(atob(result.content)))
        .catch((error) => {
          throw error;
        });
}

async function fakeCallApi(endpoind) {
  const response = endpoind === 'fighters.json' ? fighters : getFighterById(endpoind);

  return new Promise((resolve, reject) => {
    setTimeout(() => (response ? resolve(response) : reject(Error('Failed to load'))), 500);
  });
}

function getFighterById(endpoind) {
  const start = endpoind.lastIndexOf('/');
  const end = endpoind.lastIndexOf('.json');
  const id = endpoind.substring(start + 1, end);

  return fightersDetails.find((it) => it._id === id);
}

export { callApi };
