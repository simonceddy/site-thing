import { useState } from 'react';
import { getPartsFor } from '../../../features/guitarExplorer/support';
import TabButton from '../../Shared/TabButton';
import PartSelectInput from './PartSelectInput';

function PartPicker({ parts = {}, setPart }) {
  const keys = Object.keys(parts);
  // console.log(parts);
  if (!keys[0]) return null;

  const [currentTab, setCurrentTab] = useState(keys[0]);

  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col justify-start items-start">
        {keys.map((key) => (
          <TabButton
            className="w-full"
            key={`${key}-part-tab-button`}
            selected={key === currentTab}
            onClick={() => setCurrentTab(key)}
          >
            {key}
          </TabButton>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start flex-1">
        <PartSelectInput
          className="w-11/12"
          options={getPartsFor(currentTab)}
          onChange={(e) => {
            if (setPart) {
              setPart({ key: currentTab, part: e.target.value });
            }
          }}
          value={parts[currentTab]}
        />
      </div>
    </div>
  );
}

export default PartPicker;
