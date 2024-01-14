import { calculateWinner } from '../utils/helpers';
import { Square } from './square';

export function Board({ squares, xIsNext, onPlay }) {
  let status = '';

  const winner = calculateWinner(squares);

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handelSquareClick = (idx) => {
    if (squares[idx] || calculateWinner(squares)) return;

    const newSquares = [...squares];

    if (xIsNext) {
      newSquares[idx] = 'X';
    } else {
      newSquares[idx] = 'O';
    }

    onPlay(newSquares);
  };

  return (
    <>
      <div className='mb-2'>{status}</div>
      <div className='grid grid-cols-3 gap-1 w-[170px]'>
        {squares?.map((square, idx) => (
          <Square
            key={idx}
            value={square}
            handelSquareClick={() => handelSquareClick(idx)}
          />
        ))}
      </div>
    </>
  );
}
