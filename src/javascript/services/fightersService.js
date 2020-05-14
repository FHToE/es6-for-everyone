import { callApi } from '../helpers/apiHelper';
import { fightersDetails } from '../helpers/mockData'; //my line

export async function getFighters() {
  try {
    const endpoint = 'fighters.json';
    const apiResult = await callApi(endpoint, 'GET');
    
    return apiResult;
  } catch (error) {
    throw error;
  }
}

export async function getFighterDetails(id) {
  try {
    const endpoint = 'details/fighter/'+ id +'.json';
    const apiResult = await callApi(endpoint, 'GET');
    return apiResult;
  } catch (error) {
    throw error;
  } 
}

