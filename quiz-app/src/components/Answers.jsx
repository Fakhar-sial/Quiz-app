const Answers = ({ answers, selectedAnswer, updateSelectedAnswer, submit }) => {
  const customClass = item => {
    return `btn-answer ${
      selectedAnswer === item.answerId &&
      `${submit && !item.isCorrect ? 'answer-incorrect' : 'selected'}`
    } ${submit && item.isCorrect && 'answer-correct'}`;
  };

  return (
    <>
      {answers.map(item => (
        <button
          key={item.answerId}
          className={customClass(item)}
          onClick={() => updateSelectedAnswer(item)}
        >
          {item.answerText}
        </button>
      ))}
    </>
  );
};

export default Answers;
