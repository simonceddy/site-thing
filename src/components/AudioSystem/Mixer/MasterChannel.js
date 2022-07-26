/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wad from 'web-audio-daw';
import { setMasterVolume, toggleMasterComp, toggleMasterEq } from '../../../features/audioSystem/mixer/mixerSlice';
import RotaryKnob from '../Shared/RotaryKnob';

function MasterChannel() {
  const [editingComp, setEditingComp] = useState(false);
  const [editingEq, setEditingEq] = useState(false);

  const {
    volume,
    eqOn,
    compressorOn
  } = useSelector((state) => state.mixer.master);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-start items-center h-auto m-2">
      {/* <div className="p-2 border-2 border-blue-400 rounded-md mb-1 flex flex-col items-start justify-start">
        <span className="w-11/12 flex flex-row justify-between items-start p-1">
          <button
            className={`${compressorOn ? 'bg-yellow-400 text-blue-900' : 'bg-slate-800 text-blue-100'} flex flex-row justify hover:border-blue-400 border rounded border-slate-500 dark:border-slate-300 active:border-green-400 between items-center p-1 text-sm font-mono lowercase m-1`}
            style={{
              width: '4.5rem'
            }}
            type="button"
            onClick={() => dispatch(toggleMasterComp())}
          >
            <div className={`w-3 h-3 rounded-full ${compressorOn ? 'bg-green-400' : 'bg-gray-500'} mr-1`} />
            comp
          </button>
          <button
            className={`${editingComp ? 'bg-yellow-400 text-blue-900' : 'bg-slate-800 text-blue-100'} p-1 text-sm font-mono hover:border-blue-400 border rounded border-slate-500 dark:border-slate-300 active:border-green-400 lowercase m-1 w-16`}
            type="button"
            onClick={() => setEditingComp(!editingComp)}
          >
            edit
          </button>
        </span>
        <span className="w-11/12 flex flex-row justify-between items-start p-1">
          <button
            className={`${eqOn ? 'bg-yellow-400 text-blue-900' : 'bg-slate-800 text-blue-100'} flex flex-row hover:border-blue-400 border rounded border-slate-500 dark:border-slate-300 active:border-green-400 justify-between items-center p-1 text-sm font-mono lowercase m-1`}
            style={{
              width: '4.5rem'
            }}
            type="button"
            onClick={() => dispatch(toggleMasterEq())}
          >
            <div className={`w-3 h-3 rounded-full ${eqOn ? 'bg-green-400' : 'bg-gray-500'} mr-1`} />
            eq
          </button>
          <button
            className={`${editingEq ? 'bg-yellow-400 text-blue-900' : 'bg-slate-800 text-blue-100'} p-1 text-sm font-mono hover:border-blue-400 border rounded border-slate-500 dark:border-slate-300 active:border-green-400 lowercase m-1 w-16`}
            type="button"
            onClick={() => setEditingEq(!editingEq)}
          >
            edit
          </button>
        </span>
      </div> */}
      <div className="p-2 border-2 border-blue-400 rounded-md mb-1 flex flex-col justify-around items-center w-full">
        <span className="font-mono font-bold mb-1">
          Master Gain
        </span>

        <RotaryKnob
        // type="range"
          className="m-1"
          diameter={45}
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (Wad.setVolume) Wad.setVolume(val);
            dispatch(setMasterVolume(val));
          }}
        />
      </div>
    </div>
  );
}

export default MasterChannel;
