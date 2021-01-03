import * as t from './types.js';

const INITIAL_STATE = {
  nome: 'Raphael',
  email: 'raphael@origamid.com',
  diasRestantes: 120,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case t.DECREASE_TIME:
      return {...state, diasRestantes:state.diasRestantes - 1};
      break;
    case t.INCREASE_TIME:
        return {...state, diasRestantes:state.diasRestantes + 1};
        break;
    case t.MODIFY_EMAIL:
      return {...state, email:payload};
      break;
    default:
      return state;
  }
}


export default reducer;