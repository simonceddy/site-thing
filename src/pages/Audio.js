import { useState } from 'react';
import PageTitle from '../components/PageTitle';

const defaultButtons = {
  b1: { active: false },
  b2: { active: false },
  b3: { active: false },
  b4: { active: false },
};

function Audio() {
  const [buttons, setButtons] = useState(defaultButtons);
  return (
    <div className="flex flex-col justify-start items-start">
      <PageTitle>Audio</PageTitle>
      <div>
        {Object.keys(buttons).map((bKey) => (
          <button
            key={`${bKey}-button`}
            id={`${bKey}-button`}
            type="button"
            className={`rounded-md border-2 border-yellow-100 dark:border-yellow-900 hover:border-yellow-500 active:border-blue-500 m-2 ${buttons[bKey].active ? 'bg-green-300 dark:bg-green-600' : 'bg-slate-100 dark:bg-slate-900'}`}
            style={{
              width: '60px',
              height: '60px'
            }}
            onClick={() => setButtons({
              ...defaultButtons,
              [bKey]: { active: !buttons[bKey].active }
            })}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Audio;
