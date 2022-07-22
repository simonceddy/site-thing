function MuteButton({ onClick, active = false }) {
  return (
    <button type="button" className={`w-5 h-5 text-center font-mono font-bold ${active ? 'bg-red-500 text-blue-900' : 'bg-slate-500 text-blue-800'}`} onClick={onClick}>
      M
    </button>
  );
}

export default MuteButton;
