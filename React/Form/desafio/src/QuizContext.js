import React, { useState , createContext } from 'react';
import {perguntas} from './resources';

export const QuizContext = createContext();

const totalQuestions = perguntas.length;

const INITIAL_STATE = {
  right: 0,
  wrong: 0,
  question:1,
  total: totalQuestions,
  questions:perguntas
};

export function QuizStorage({ children }) {
  const [quiz, setQuiz] = useState(INITIAL_STATE);

  function nextQuestion() {
    console.info(quiz);
    setQuiz((state) => {
      return {
        ...state,
        question:quiz.question + 1
      }
    });
  }

  

  function rightAnswer() {
    setQuiz({
      ...quiz,
      right: quiz.right + 1,
    });
    
    nextQuestion();
  }

  function wrongAnswer() {
    setQuiz({
      ...quiz,
      wrong: quiz.wrong + 1,
    });
    nextQuestion();
  }

  function setTotalQuestions() {
    setQuiz({
      ...quiz,
      right: quiz.total + 1,
    });
  }

  const dataContext = {
    quiz,
    rightAnswer,
    wrongAnswer,
    setTotalQuestions,
  };

  return <QuizContext.Provider value={dataContext}>
    {children}
  </QuizContext.Provider>;
}
