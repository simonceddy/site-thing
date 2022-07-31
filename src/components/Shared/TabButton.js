function TabButton({
  children, selected = false, className, onClick
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${selected ? 'bg-slate-600 cursor-default text-yellow-100' : 'cursor-pointer bg-blue-500 text-red-100 hover:border-blue-400 active:border-green-400 hover:underline'} p-1 border-2 text-sm text-left border-slate-700 font-mono ${className}`}
      disabled={selected}
    >
      {children}
    </button>
  );
}

export default TabButton;
