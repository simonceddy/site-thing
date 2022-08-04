function GuitarPresets({ presets = {}, loadPreset }) {
  const pKeys = Object.keys(presets);
  return (
    <div className="flex flex-col justify-start items-start w-11/12">
      {pKeys.map((p) => (
        <button
          type="button"
          className="w-full p-1 border-2 border-gray-500 hover:border-blue-400 active:border-green-400 text-sm font-mono hover:underline"
          key={`preset-${p}`}
          onClick={() => {
            if (loadPreset) loadPreset(presets[p]);
          }}
        >
          {presets[p].name || p}
        </button>
      ))}
    </div>
  );
}

export default GuitarPresets;
