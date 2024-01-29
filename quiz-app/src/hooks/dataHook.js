import { useState } from 'react';
import questionBank from '../services/questionBank.js';

function useData() {
  const [questions, setQuestions] = useState(() => questionBank());
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionsLength, setQuestionsLength] = useState(
    () => questions.length
  );
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState([]);
  const [displayResult, setDisplayResult] = useState(false);

  return {
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
  };
}

export default useData;
