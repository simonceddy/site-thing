function ConsoleFader({ value, onChange }) {
  return (
    <div>
      <input
        type="range"
        className="w-14 h-5 -rotate-90"
        min={-60}
        max={12}
        step={0.1}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ConsoleFader;
