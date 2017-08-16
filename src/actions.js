import axios from 'axios';

// Fetch images from yaml file
export const FETCH_ROOMS = 'FETCH_ROOMS';
export function fetchRooms( date ) {
  return {
    type: FETCH_ROOMS,
    payload: axios.post('https://challenges.1aim.com/roombooking/getrooms', { date }),
  };
}
