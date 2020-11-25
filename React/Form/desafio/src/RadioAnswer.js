import React from 'react';

const RadioAnswer = ({ question, setSelectedAnswer }) => {
  return (
    <div>
      {question.options.map((opt) => {
        return (
          <div key={opt}>
            <label>
              <input
                type="radio"
                name={question.id}
                value={opt}
                required
                onChange={({ target }) => setSelectedAnswer(target.value)}
              />
              {opt}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioAnswer;
