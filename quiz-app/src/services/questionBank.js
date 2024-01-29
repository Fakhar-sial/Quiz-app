const questions = [
  {
    questionId: 0,
    questionText: 'What is the capital of Finland?',
    answers: [
      { answerId: 0, answerText: 'Helsinki', isCorrect: true },
      { answerId: 1, answerText: 'Tampere', isCorrect: false },
      { answerId: 2, answerText: 'Espoo', isCorrect: false },
      { answerId: 3, answerText: 'Rovaniemi', isCorrect: false },
    ],
  },
  {
    questionId: 1,
    questionText: 'Which country is the largest?',
    answers: [
      { answerId: 0, answerText: 'USA', isCorrect: false },
      { answerId: 1, answerText: 'Pakistan', isCorrect: false },
      { answerId: 2, answerText: 'Russia', isCorrect: true },
      { answerId: 3, answerText: 'Peru', isCorrect: false },
    ],
  },
  {
    questionId: 2,
    questionText: 'Which one is a comic hero character?',
    answers: [
      { answerId: 0, answerText: 'Batman', isCorrect: true },
      { answerId: 1, answerText: 'Vladimir Lenin', isCorrect: false },
      { answerId: 2, answerText: 'Donald Trump', isCorrect: false },
      { answerId: 3, answerText: 'Santa Claus', isCorrect: false },
    ],
  },
  {
    questionId: 3,
    questionText: 'What is the capital of France?',
    answers: [
      { answerId: 0, answerText: 'Berlin', isCorrect: false },
      { answerId: 1, answerText: 'Madrid', isCorrect: false },
      { answerId: 2, answerText: 'Paris', isCorrect: true },
      { answerId: 3, answerText: 'Rome', isCorrect: false },
    ],
  },
  {
    questionId: 4,
    questionText: 'Who wrote "To Kill a Mockingbird"?',
    answers: [
      { answerId: 0, answerText: 'J.K. Rowling', isCorrect: false },
      { answerId: 1, answerText: 'Harper Lee', isCorrect: true },
      { answerId: 2, answerText: 'George Orwell', isCorrect: false },
      { answerId: 3, answerText: 'Charles Dickens', isCorrect: false },
    ],
  },
  {
    questionId: 5,
    questionText: 'Which is the longest river in the world?',
    answers: [
      { answerId: 0, answerText: 'Nile', isCorrect: true },
      { answerId: 1, answerText: 'Amazon', isCorrect: false },
      { answerId: 2, answerText: 'Yangtze', isCorrect: false },
      { answerId: 3, answerText: 'Mississippi', isCorrect: false },
    ],
  },
  {
    questionId: 6,
    questionText: 'What is the capital of Japan?',
    answers: [
      { answerId: 0, answerText: 'Beijing', isCorrect: false },
      { answerId: 1, answerText: 'Seoul', isCorrect: false },
      { answerId: 2, answerText: 'Tokyo', isCorrect: true },
      { answerId: 3, answerText: 'Bangkok', isCorrect: false },
    ],
  },
  {
    questionId: 7,
    questionText: 'Which planet is known as the Red Planet?',
    answers: [
      { answerId: 0, answerText: 'Earth', isCorrect: false },
      { answerId: 1, answerText: 'Mars', isCorrect: true },
      { answerId: 2, answerText: 'Venus', isCorrect: false },
      { answerId: 3, answerText: 'Jupiter', isCorrect: false },
    ],
  },
  {
    questionId: 8,
    questionText: 'Who painted the Mona Lisa?',
    answers: [
      { answerId: 0, answerText: 'Pablo Picasso', isCorrect: false },
      { answerId: 1, answerText: 'Leonardo da Vinci', isCorrect: true },
      { answerId: 2, answerText: 'Vincent van Gogh', isCorrect: false },
      { answerId: 3, answerText: 'Claude Monet', isCorrect: false },
    ],
  },
  {
    questionId: 9,
    questionText: 'What is the currency of Australia?',
    answers: [
      { answerId: 0, answerText: 'Dollar', isCorrect: true },
      { answerId: 1, answerText: 'Euro', isCorrect: false },
      { answerId: 2, answerText: 'Yen', isCorrect: false },
      { answerId: 3, answerText: 'Pound', isCorrect: false },
    ],
  },
  {
    questionId: 10,
    questionText: 'What is the largest planet in our solar system?',
    answers: [
      { answerId: 0, answerText: 'Earth', isCorrect: false },
      { answerId: 1, answerText: 'Jupiter', isCorrect: true },
      { answerId: 2, answerText: 'Mars', isCorrect: false },
      { answerId: 3, answerText: 'Venus', isCorrect: false },
    ],
  },
];

function questionBank() {
  return questions;
}

export default questionBank;
