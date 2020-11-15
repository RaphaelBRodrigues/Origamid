import Quiz from './Quiz';
import React from 'react';
import { QuizStorage } from './QuizContext';

function App() {
  return (
    <QuizStorage>
      <Quiz />
    </QuizStorage>
  );
}

export default App;
