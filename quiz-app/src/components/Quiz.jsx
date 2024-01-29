import { useState } from 'react';
import Question from './Question';
import Answers from './Answers';

const Quiz = ({
  question,
  selectedAnswer,
  submit,
  updateQuestion,
  handleSelectAnswer,
  handleSubmit,
}) => {
  return (
    <>
      <div className='question borders st-display'>
        <Question
          question={question}
          selectedAnswer={selectedAnswer}
          submit={submit}
          updateQuestion={updateQuestion}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className='answers borders '>
        <Answers
          answers={question.answers}
          selectedAnswer={selectedAnswer}
          submit={submit}
          updateSelectedAnswer={handleSelectAnswer}
        />
      </div>
    </>
  );
};

export default Quiz;
