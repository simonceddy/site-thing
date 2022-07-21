import { useDispatch, useSelector } from 'react-redux';
import { GiPlayButton as PlayButton } from 'react-icons/gi';
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import {
  nextStep, setTempo, togglePlay, toggleStep
} from './sequencerSlice';

function Sequencer() {
  const {
    steps, playing, currentStep, tempo
  } = useSelector((state) => state.sequencer);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (playing) {
      // set up interval
      intervalRef.current = setInterval(() => {
        dispatch(nextStep());
      }, (60 / tempo) * 1000);
    }
  }, [playing, tempo]);

  const tempoHandler = throttle((e) => dispatch(setTempo(Number(e.target.value))), 100);

  return (
    <div className="flex flex-row justify-start items-center">
      <div className="bg-slate-400 mr-2 flex flex-row justify-start items-center">
        <button
          type="button"
          className={`mx-2 my-1 ${playing ? 'bg-green-500' : 'bg-gray-400'} p-1 rounded border-2 border-slate-500 hover:border-blue-400 active:bg-cyan-500`}
          onClick={() => dispatch(togglePlay())}
        >
          <PlayButton size={30} />
        </button>
        <label htmlFor="tempo-slider" className="flex flex-row justify-between items-center mx-2 p-1">
          <span className="w-6 mr-2">{tempo} BPM</span>
          <input
            type="range"
            min={20}
            max={400}
            step={1}
            id="tempo-slider"
            name="tempo-slider"
            value={tempo}
            onChange={tempoHandler}
          />
        </label>
      </div>
      <div className="flex flex-row justify-start items-center">
        {steps.map((active, index) => (
          <button
            type="button"
            key={`sequencer-button-${index}`}
            onClick={() => dispatch(toggleStep(index))}
            className={`w-4 h-4 border-2 ${currentStep === index ? 'border-yellow-500' : 'border-slate-600'} ${active ? 'bg-green-500' : 'bg-gray-300'} m-1 rounded hover:border-blue-400`}
          >
            {}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sequencer;
