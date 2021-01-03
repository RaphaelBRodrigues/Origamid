import * as t from './types.js';

export const increaseTime = () => {
  return {
    type:t.INCREASE_TIME,
  }
}

export const decreaseTime = () => {
  return {
    type:t.DECREASE_TIME
  }
}

export const modifyEmail = (payload) => {
  return {
    type:t.MODIFY_EMAIL,
    payload
  }
}