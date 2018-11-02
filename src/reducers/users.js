const initialState = {
  isFetch: false,
  error: null,
  user: null
}

const u = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state = {
        isFetch: true,
        error: null,
        user: null
      };
    case 'FETCH_SUCESS':
      return state = {
        isFetch: false,
        error: null,
        user: action.uu
      };
    case 'FETCH_FAIL':
      return state = {
        isFetch: false,
        error: action.errors,
        user: null
      };
    default: return state
  }
}

export default u;