function SoloButton({ onClick, active = false }) {
  return (
    <button type="button" className={`w-5 h-5 text-center font-mono font-bold ${active ? 'bg-yellow-400 text-blue-900' : 'bg-slate-500 text-blue-800'}`} onClick={onClick}>
      S
    </button>
  );
}

export default SoloButton;
