import aluno from './aluno/reducer.js';
import aulas from './aulas/reducer.js';

const reducer = Redux.combineReducers({
  aluno,
  aulas
});

const store = Redux.createStore(reducer);

export default store;