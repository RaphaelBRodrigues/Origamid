import React, { useContext } from 'react'
import { QuizContext } from './QuizContext';

const ShowResult = () => {
  const { quiz } = useContext(QuizContext);
  return (
    <div>
      Você acertou { quiz.right } de { quiz.total }
    </div>
  )
}

export default ShowResult;