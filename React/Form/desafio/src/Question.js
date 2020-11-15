import React, { useState , useEffect, useContext } from 'react'
import { QuizContext } from './QuizContext';
import RadioAnswer from './RadioAnswer';

const Question = () => {
  const [question,setQuestion] = useState(false);
  const [selectedAnswer,setSelectedAnswer] = useState(false);
  const { quiz , rightAnswer ,wrongAnswer } = useContext(QuizContext);

  useEffect(() => {
    setQuestion(quiz.questions[quiz.question - 1]);
  },[quiz]);

  if(!question) return null;
 
  function handleSubmit(e) {
    e.preventDefault();
    if(selectedAnswer === question.resposta){
      console.log("certo");
      rightAnswer();
    }else {
      wrongAnswer();
    }
  }
  return (
      <form onSubmit={handleSubmit}>
        <h2>{question.pergunta}</h2>
        <RadioAnswer setSelectedAnswer={setSelectedAnswer} question={question} />
         <button type="submit">Próxima</button>
      </form>
  )
}

export default Question;