function SmlSqrLabelBtn({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`w-7 h-7 uppercase rounded border border-gray-400 hover:border-blue-400 text-center font-mono font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SmlSqrLabelBtn;
