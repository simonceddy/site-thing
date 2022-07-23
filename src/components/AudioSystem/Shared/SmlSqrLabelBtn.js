function SmlSqrLabelBtn({ onClick, className }) {
  return (
    <button
      type="button"
      className={`w-5 h-5 uppercase rounded border border-gray-400 hover:border-blue-400 text-center font-mono font-bold ${className}`}
      onClick={onClick}
    >
      M
    </button>
  );
}

export default SmlSqrLabelBtn;
