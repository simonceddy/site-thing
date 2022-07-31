import { useCallback, useState } from 'react';
import ColourPicker from '../../containers/ColourPicker';
import TabButton from '../Shared/TabButton';

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
          <TabButton
            className="w-full"
            key={`${id}-toggle-colour-tab`}
            onClick={() => setCurrentTab(id)}
            selected={currentTab === id}
          >
            {colours[id].name || id}
          </TabButton>
        ) : null))}
      </div>
      <div>
        {currentTab ? (<CurrentColourPicker />) : null}
      </div>
    </div>
  );
}

export default GuitarColourManager;
