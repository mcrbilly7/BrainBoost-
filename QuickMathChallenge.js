
import React, { useState, useEffect } from 'react';

function QuickMathChallenge() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  function generateQuestion() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setQuestion(`${a} + ${b}`);
    setAnswer((a + b).toString());
  }

  function handleAnswer(userInput) {
    if (userInput === answer) {
      setScore(score + 1);
    }
    generateQuestion();
  }

  return (
    <div>
      <h2>Quick Math Challenge</h2>
      <p>{question}</p>
      <input
        type="text"
        placeholder="Your answer"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAnswer(e.target.value);
        }}
      />
      <p>Score: {score}</p>
    </div>
  );
}

export default QuickMathChallenge;
