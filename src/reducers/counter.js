import { INCREMENT } from '../constants';

const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default: return state
  }
}

export default counter;