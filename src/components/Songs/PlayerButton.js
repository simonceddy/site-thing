function PlayerButton({
  toggled = false, onClick, children, disabled = false
}) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`border-4 rounded-full border-slate-500 flex flex-col justify-center items-center m-1 ${disabled ? 'cursor-default' : 'cursor-pointer hover:border-yellow-500 focus:border-yellow-500 active:border-teal-500'}`}
      style={{
        width: '54px',
        padding: '2px',
        height: '54px',
        background: toggled ? 'rgb(0, 255, 0)' : 'rgb(156 163 175)'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PlayerButton;
