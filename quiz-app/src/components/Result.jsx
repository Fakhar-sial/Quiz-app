const Result = ({ result }) => {
  // console.log(result);
  return (
    <>
      {result.length === 0 && <h1>No answer has been submitted yet</h1>}
      {result.map(e => (
        <div key={Math.random()}>
          <p>- {e.submittedQuestion}</p>
          <span className='answer-correct'>{e.correctAnswer}</span>
          {e.correctAnswer !== e.givenAnswer && (
            <span className='answer-incorrect'>{e.givenAnswer}</span>
          )}
        </div>
      ))}
    </>
  );
};

export default Result;
