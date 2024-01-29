import { useState, useEffect } from 'react';
import questionBank from './services/questionBank.js';
import './App.css';
import Quiz from './components/Quiz.jsx';
import Result from './components/Result.jsx';
import useData from './hooks/dataHook.js';

function App() {
  const {
    questions,
    setQuestions,
    selectedAnswer,
    setSelectedAnswer,
    questionsLength,
    setQuestionsLength,
    submit,
    setSubmit,
    result,
    setResult,
    displayResult,
    setDisplayResult,
  } = useData();

  const updateQuestion = item => {
    const updatedQuestions = questions.filter(
      e => e.questionId !== item.questionId
    );
    setQuestions(updatedQuestions);
    setSelectedAnswer(null);
    setSubmit(false);
  };

  const handleSubmit = question => {
    const submittedQuestion = question.questionText;
    const givenAnswer = question.answers[selectedAnswer].answerText;
    const correctAnswer =
      question.answers.find(answer => answer.isCorrect)?.answerText || '';
    const updateResult = [...result];
    updateResult.push({ submittedQuestion, givenAnswer, correctAnswer });
    setResult(updateResult);
    setSubmit(true);
  };

  const handleSelectAnswer = item => {
    if (!submit) {
      item.answerId === selectedAnswer
        ? setSelectedAnswer(null)
        : setSelectedAnswer(item.answerId);
    }
  };

  const handleDisplayResult = () => {
    setDisplayResult(displayResult ? false : true);
  };

  //

  useData();
  return (
    <>
      <div
        className='result-dp'
        style={{ display: `${displayResult ? '' : 'none'}` }}
      >
        <button className='btn-close-result' onClick={handleDisplayResult}>
          X
        </button>
        <Result result={result} />
      </div>
      <div className='container st-display'>
        {questions.length > 0 && (
          <div className='top-bar'>
            <div>
              {!displayResult && (
                <button onClick={handleDisplayResult}>Summry</button>
              )}
            </div>

            <span>
              {questionsLength - (questions.length - 1)} / {questionsLength}
            </span>
          </div>
        )}
        {questions.length > 0 ? (
          <Quiz
            question={questions[0]}
            selectedAnswer={selectedAnswer}
            submit={submit}
            updateQuestion={updateQuestion}
            handleSelectAnswer={handleSelectAnswer}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div className='st-display'>
            <h1>Quiz is over</h1>
            <h2>Please REFRESH to play again</h2>
            <br />
            <button onClick={handleDisplayResult}>View result summary</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
