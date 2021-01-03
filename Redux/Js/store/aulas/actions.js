import * as t from './types.js';

export const completeClass = (payload) => {
  return {
    type: t.COMPLETE_CLASS,
    payload
  }
} 

export const completeCourse = () => {
  return {
    type: t.COMPLETE_COURSE
  }
}

export const resetCourse = () => {
  return {
    type: t.RESET_COURSE
  }
}