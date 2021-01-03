import * as t from './types.js';

const INITIAL_STATE = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const reducer = (state = INITIAL_STATE, { type, payload}) => {
  switch(type) {
    case t.COMPLETE_CLASS: 

    const selectedClass = state.find((item,i) => {
      return item.id === payload;
    })
    selectedClass.completa = true;


    const index = state.findIndex((item) => {
      return item.id === payload;
    })

    state = state.slice();
    state[index] = selectedClass;


    return [...state];
    break;

    case t.COMPLETE_COURSE:
    const completedArray = state.map((item) => {
      return {...item,completa:true};
    });
    return [...completedArray];
    break;
    
    case t.RESET_COURSE: 
    const resetedArray = state.map((item) => {
      return {...item,completa:false};
    });
    return [...resetedArray];


    default: 
      return state;
  }
}

export default reducer;