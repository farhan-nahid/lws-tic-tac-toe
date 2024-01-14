export function Square({ value, handelSquareClick }) {
  return (
    <button
      className='bg-white border border-gray-400 h-12 w-12 disabled:cursor-not-allowed leading-9 text-lg'
      onClick={handelSquareClick}
      disabled={value}
    >
      {value}
    </button>
  );
}
