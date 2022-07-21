import { useDispatch, useSelector } from 'react-redux';
import {
  GiPlayButton as PlayButton,
} from 'react-icons/gi';
import {
  MdReplay as ResetButton,
} from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import {
  nextStep, resetSteps, setSequenceLength, togglePlay, toggleStep
} from './sequencerSlice';
import { setTempo } from '../masterClock/masterClockSlice';

// TODO make better
function makeSteps(steps = 16) {
  const stepsArr = [];
  for (let i = 0; i < steps; i + 1) {
    stepsArr.push(i + 1);
  }
  return stepsArr;
}

const stepKeys = makeSteps(16);

function Sequencer() {
  const {
    steps, playing, currentStep, seqLength
  } = useSelector((state) => state.sequencer);
  const tempo = useSelector((state) => state.masterClock.tempo);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  const intervalHandler = () => {
    clearInterval(intervalRef.current);
    if (playing) {
      // set up interval
      intervalRef.current = setInterval(() => {
        dispatch(nextStep());
      }, (60 / tempo) * 1000);
    }
  };

  useEffect(intervalHandler, [playing, tempo]);

  const tempoHandler = throttle((e) => dispatch(setTempo(Number(e.target.value))), 100);

  return (
    <div className="flex flex-row justify-start items-center">
      <div className="bg-slate-400 dark:bg-slate-900 mr-2 flex flex-col justify-start items-center rounded">
        <div className="p-2 flex flex-row justify-around border-b-2 border-blue-500 items-center w-full">
          <button
            type="button"
            className={`m-1 ${playing ? 'bg-green-500' : 'bg-gray-400'} p-1 rounded border-2 border-slate-500 hover:border-blue-400 active:bg-cyan-500`}
            onClick={() => dispatch(togglePlay())}
          >
            <PlayButton size={30} />
          </button>
          <button
            type="button"
            className="m-1 p-1 rounded border-2 border-slate-500 hover:border-blue-400 active:bg-cyan-500"
            onClick={() => {
              dispatch(resetSteps());
              intervalHandler();
            }}
          >
            <ResetButton size={30} />
          </button>
        </div>
        <div className="p-2 flex flex-row justify-between items-center border-b-2 border-blue-500 w-full">
          <label htmlFor="sequence-length-input">
            <input
              name="sequence-length-input"
              id="sequence-length-input"
              className="w-16 bg-black text-lime-400 italic font-mono p-1 border-2 rounded border-green-600 focus:border-blue-400"
              type="number"
              min={1}
              max={16}
              value={seqLength}
              onChange={(e) => dispatch(setSequenceLength(Number(e.target.value)))}
            />
          </label>
        </div>
        <div className="p-2 w-full">
          <label htmlFor="tempo-slider" className="flex flex-col justify-start items-start mx-2 p-1">
            <span className="m-1 italic font-mono p-1 border border-green-400 rounded">{tempo} BPM</span>
            <input
              type="range"
              min={20}
              max={400}
              step={1}
              className="w-20"
              id="tempo-slider"
              name="tempo-slider"
              value={tempo}
              onChange={tempoHandler}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <div
          className="flex flex-row justify-start items-center"
        >
          {stepKeys.map((step) => (
            <div className="w-4 h-4 m-1" key={`step-header-${step}`}>
              {step}
            </div>
          ))}
        </div>
        {Object.keys(steps).map((track, trackIndex) => (
          <div
            className="flex flex-row justify-start items-center"
            key={`sequencer-track-${trackIndex}`}
          >
            {steps[track].map((active, index) => (
              <button
                type="button"
                key={`sequencer-button-${index}`}
                onClick={() => dispatch(toggleStep({ step: index, track }))}
                className={`w-4 h-4 border-2 ${currentStep === index ? 'border-yellow-500' : 'border-slate-600'} ${active ? 'bg-green-500' : 'bg-gray-300'} m-1 rounded hover:border-blue-400 ${index < seqLength ? '' : 'bg-opacity-25'}`}
              >
                {}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sequencer;
