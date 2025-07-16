import React from 'react';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <button
          key={i}
          className={`square ${square?.toLowerCase() || ''}`}
          onClick={() => onClick(i)}
          disabled={square != null}
          aria-label={`Square ${i + 1}`}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
