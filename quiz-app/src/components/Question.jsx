const Question = ({
  question,
  updateQuestion,
  selectedAnswer,
  submit,
  handleSubmit,
}) => {
  return (
    <>
      <h2>{question.questionText}</h2>
      {selectedAnswer !== null && submit && (
        <button onClick={() => updateQuestion(question)}>Next</button>
      )}
      {selectedAnswer !== null && !submit && (
        <button onClick={() => handleSubmit(question)}>submit</button>
      )}
    </>
  );
};

export default Question;
