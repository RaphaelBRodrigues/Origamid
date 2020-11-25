import React, { useContext, useState , useEffect } from 'react';
import { QuizContext } from './QuizContext';
import Question from './Question';
import ShowResult from './ShowResult';

const Quiz = () => {
  const { quiz } = useContext(QuizContext);
  const [showQuestions,setShowQuestions] = useState(true);

  useEffect(() => {
    if(quiz.question > quiz.total) setShowQuestions(false);
  }, [quiz]);
  

  return (
    <>
    {showQuestions ? (
      <fieldset>
      <legend>Questão {quiz.question}</legend>
      <br />
        <Question />
        <br />
        {quiz.question} de {quiz.total}
      </fieldset>
      ):
      <ShowResult />
      }
    </>
  );
};

export default Quiz;
