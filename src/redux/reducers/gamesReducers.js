const INITIAL_STATE = {
    game312: {count: 0, data: {price : 0},tot: 0},
    game201: {count: 0, data: {price : 0},tot : 0},
    game102: {count: 0, data: {price : 0},tot: 0},
    game99: {count: 0, data: {price : 0},tot: 0},
    game12: {count: 0, data: {price : 0},tot: 0},
    game74: {count: 0, data: {price : 0},tot: 0},
    game31: {count: 0, data: {price : 0},tot: 0},
    game420: {count: 0, data: {price : 0},tot: 0},
    game501: {count: 0, data: {price : 0},tot: 0},
  };
  
  function gamers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'clean':
            return INITIAL_STATE
        case 312:
            return {...state, game312: {
                count: state.game312.count + 1,
                 data: action.payload,
                tot: state.game312.tot + state.game312.count + 1 * action.payload.price} };
        case  313:
            if((state.game312.count - 1) === 0){
                return { ...state, game312: {
                    count: state.game312.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
                    return {...state, game312: {
                        count: state.game312.count - 1,
                         data: action.payload,
                        tot: state.game312.tot + state.game312.count - 1 * action.payload.price} };
        case 201:
            return {...state, game201: {
                count: state.game201.count + 1, data: action.payload,
                tot: state.game201.tot + state.game201.count + 1 * action.payload.price} };
        case 202:
            if((state.game201.count - 1) === 0){
                return { ...state, game201: {
                    count: state.game201.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return {...state, game201: {
                count: state.game201.count - 1, data: action.payload,
                tot: state.game201.tot + state.game201.count - 1 * action.payload.price} };       
        case 102:
             return {...state,game102:{
                count: state.game102.count + 1,
                 data: action.payload,
                 tot: state.game102.tot + state.game102.count + 1 * action.payload.price} };
        case 103:
            if((state.game102.count - 1) === 0){
                return { ...state, game102: {
                    count: state.game102.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return {...state,game102:{
                count: state.game102.count - 1,
                data: action.payload,
                tot: state.game102.tot + state.game102.count - 1 * action.payload.price} };         
        case 99:
            return { ...state,game99:{
                 count: state.game99.count + 1,
                 data: action.payload,
                 tot: state.game99.tot + state.game99.count + 1 * action.payload.price} };
        case 100:
            if((state.game99.count - 1) === 0){
                return { ...state, game99: {
                    count: state.game99.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return { ...state,game99:{
                 count: state.game99.count - 1,
                 data: action.payload,
                 tot: state.game99.tot + state.game99.count -1 * action.payload.price} };
        case 12:
            return {...state, game12:{
                 count: state.game12.count + 1, 
                 data: action.payload,
                 tot: state.game12.tot +state.game12.count + 1 * action.payload.price} };
        case 13:
            if((state.game12.count - 1) === 0){
                return { ...state, game12: {
                    count: state.game12.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return {...state, game12: {
                        count: state.game12.count - 1,
                         data: action.payload,
                        tot: state.game12.tot + state.game12.count - 1 * action.payload.price} };
        case 74:
             return {...state, game74:{
                count:  state.game74.count + 1, 
                data: action.payload,
                tot: state.game74.tot +state.game74.count + 1 * action.payload.price} };
        case 75:
            if((state.game74.count - 1) === 0){
                return { ...state, game74: {
                    count: state.game74.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
             return {...state, game74:{
                count:  state.game74.count - 1, 
                data: action.payload,
                tot: state.game74.tot +state.game74.count - 1 * action.payload.price} };        
        case 31:
            return {...state, game31:{ 
                count: state.game31.count + 1, 
                data: action.payload,
                tot: state.game31.tot + state.game31.count + 1 * action.payload.price
            } };
        case 32:
            if((state.game31.count - 1) === 0){
                return { ...state, game31: {
                    count: state.game31.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return {...state, game31:{ 
                count: state.game31.count - 1, 
                data: action.payload,
                tot: state.game31.tot + state.game31.count -1  * action.payload.price
                } };    
        case 420:
            return { ...state,game420:{
                count:  state.game420.count + 1,
                 data: action.payload,
                 tot: state.game420.tot + state.game420.count + 1 * action.payload.price} };
        case 421:
            if((state.game420.count - 1) === 0){
                return { ...state, game420: {
                    count: state.game420.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return { ...state,game420:{
                count:  state.game420.count - 1,
                data: action.payload,
                tot: state.game420.tot + state.game420.count - 1 * action.payload.price} };         
        case 501:
            return { ...state, game501: {
                count: state.game501.count + 1, 
                data: action.payload,
                tot: state.game501.tot + state.game501.count + 1 * action.payload.price} };
        case 502:
            if((state.game501.count - 1) === 0){
                return { ...state, game501: {
                    count: state.game501.count - 1, 
                    data: action.payload,
                    tot: 0} };  
            }
            return { ...state, game501: {
                count: state.game501.count - 1, 
                data: action.payload,
                tot: state.game501.tot + state.game501.count - 1 * action.payload.price} };        
        default:
            return state;
    }
  }
  
  export default gamers;
