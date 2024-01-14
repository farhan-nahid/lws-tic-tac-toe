import { useState } from 'react';
import { Board } from './board';

export default function GameWrapper() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];

  const onPlay = (newSquares) => {
    const updatedHistory = [...history.slice(0, stepNumber + 1), newSquares];
    setHistory(() => updatedHistory);
    setXIsNext((prev) => !prev);

    setStepNumber(updatedHistory.length - 1);
  };

  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <Board squares={current} xIsNext={xIsNext} onPlay={onPlay} />
      </div>
      <ul>
        {history.map((_, idx) => (
          <li
            key={idx}
            className='mb-2 cursor-pointer'
            onClick={() => setStepNumber(idx)}
          >
            {idx ? `Go to move #${idx}` : 'Go to game start'}
          </li>
        ))}
      </ul>
    </div>
  );
}
