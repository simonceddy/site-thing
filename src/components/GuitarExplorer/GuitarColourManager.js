import { useCallback, useState } from 'react';
import ColourPicker from '../../containers/ColourPicker';

function GuitarColourManager({ colours = {}, setColour }) {
  const keys = Object.keys(colours);
  const [currentTab, setCurrentTab] = useState(keys[0] || null);
  const CurrentColourPicker = useCallback(() => (
    <ColourPicker
      colour={colours[currentTab].value}
      onChange={setColour ? (val) => setColour({
        value: val,
        key: currentTab
      }) : null}
    />
  ), [currentTab]);
  return (
    <div className="flex flex-row justify-start items-start w-full">
      <div className="flex flex-col justify-start items-start">
        {keys.map((id) => (colours[id] && colours[id].value ? (
          <button
            key={`${id}-toggle-colour-tab`}
            type="button"
            onClick={() => setCurrentTab(id)}
            className={`${currentTab === id ? 'bg-slate-600 cursor-default text-yellow-100' : 'cursor-pointer bg-blue-500 text-red-100 hover:border-blue-400 active:border-green-400 hover:underline'} p-1 border-2 w-full text-left border-slate-700 font-mono font-bold`}
            disabled={currentTab === id}
          >
            {colours[id].name || id}
          </button>
        ) : null))}
      </div>
      <div>
        {currentTab ? (<CurrentColourPicker />) : null}
      </div>
    </div>
  );
}

export default GuitarColourManager;
