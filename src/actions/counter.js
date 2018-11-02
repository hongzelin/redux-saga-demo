import { INCREMENT, INCREMENT_ASYNC } from '../constants';

export const increate = () => {
  return {
    type: INCREMENT
  }
}

export const increateAsync = () => {
  return {
    type: INCREMENT_ASYNC
  }
}


export const fetch_user = () => {
  return {
    type: 'FETCH_REQUEST'
    // type: 'FETCH_USER'
  }
}

