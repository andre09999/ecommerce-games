const INITIAL_STATE = {
  tot: 0,
};

function totReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'final':
  return {tot: action.payload}
    default:
      return state;
  }


}

export default totReducer;