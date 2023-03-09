const INITIAL_STATE = {
    count: 0,
  };
  
  function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return { count: state.count + action.payload };
        case 'DECREMENT_COUNTER':
          if(state.count < 0){
            return {count: 0}
          }
          return { count: state.count - action.payload };  
          case 'clean1':
        return { count: 0 };
      default:
        return state;
    }


  }
  
  export default counterReducer;
