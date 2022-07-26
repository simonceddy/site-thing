/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
  GiPlayButton as PlayButton,
} from 'react-icons/gi';
import {
  MdReplay as ResetButton,
} from 'react-icons/md';
import { useEffect, /* useMemo,  */useRef } from 'react';
import {
  nextStep,
  resetSteps,
  seqModes,
  setSeqMode,
  setSequenceLength,
  setStepLength,
  stepLengths,
  toggleStep
} from './sequencerSlice';
import { tick, togglePlay } from '../masterClock/masterClockSlice';
import SequencerTrack from '../../../components/AudioSystem/Sequencer/SequencerTrack';
// import { loadVoices } from '../../../support/audioSystem';

// TODO make better
function makeSteps(steps = 16) {
  const stepsArr = [];
  for (let i = 0; i < steps; i++) {
    stepsArr.push(i + 1);
  }
  return stepsArr;
}

const stepKeys = makeSteps(16);

// const playVoices = async (currentStep, tracks = {}, timeout = 500) => {
//   console.log(currentStep);
//   await Promise.all(Object.values(tracks).map(async (track, id) => {
//     if (track[currentStep] && voices[id]) {
//       await voices[id].play();
//       // setTimeout(() => {
//       //   voices[id].stop();
//       // }, timeout);
//     }
//   }));
// };

function Sequencer() {
  const {
    steps, currentStep, seqLength, mode, stepLength, /* direction */
  } = useSelector((state) => state.sequencer);
  const { tempo, playing } = useSelector((state) => state.masterClock);
  // const { tracks } = useSelector((state) => state.voices);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);
  // const voices = useMemo(() => loadVoices(Object.values(tracks)), [tracks]);
  // console.log(voices);
  const intervalHandler = () => {
    clearInterval(intervalRef.current);
    if (playing) {
      // set up interval
      intervalRef.current = setInterval(() => {
        dispatch(nextStep());
        dispatch(tick());
      }, ((60 / tempo) * 1000) * stepLength);
    }
  };

  // const playVoices = async () => {
  //   await Promise.all(Object.values(steps).map(async (track, id) => {
  //     if (track[currentStep] && voices[id]) {
  //       await voices[id].play();
  //       // setTimeout(() => {
  //       //   voices[id].stop();
  //       // }, timeout);
  //     }
  //   }));
  // };

  useEffect(intervalHandler, [playing, tempo, stepLength]);

  // useEffect(() => {
  //   if (playing) playVoices(currentStep, steps);
  // }, [currentStep, playing, direction]);
  return (
    <div className="flex flex-row justify-start items-center">
      <div className="bg-slate-400 dark:bg-slate-900 mr-2 flex flex-col justify-start items-center rounded border-2 border-blue-500">
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
        <div className="p-2 flex flex-row justify-between items-center w-full border-b-2 border-blue-500 font-mono">
          <label htmlFor="sequence-length-input" className="flex flex-row justify-between items-center w-full">
            <span className="text-sm mr-1">Length</span>
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
        <div className="p-2 flex flex-row justify-between items-center w-full">
          <label htmlFor="sequence-mode-input" className="flex flex-row justify-between items-center w-full">
            <span className="text-sm mr-1">Mode</span>
            <select
              className="w-16 bg-black text-lime-400 italic font-mono p-1 border-2 rounded border-green-600 focus:border-blue-400 text-sm"
              value={mode}
              onChange={(e) => dispatch(setSeqMode(e.target.value))}
            >
              {Object.values(seqModes).map((m) => (
                <option
                  value={m}
                  label={m.toUpperCase()}
                  key={`seq-mode-opt-${m}`}
                />
              ))}
            </select>
          </label>
        </div>
        <div className="p-2 flex flex-row justify-between items-center w-full">
          <label htmlFor="sequence-mode-input" className="flex flex-row justify-between items-center w-full">
            <span className="text-sm mr-1">Note</span>
            <select
              className="w-16 bg-black text-lime-400 italic font-mono p-1 border-2 rounded border-green-600 focus:border-blue-400 text-sm"
              value={stepLength}
              onChange={(e) => dispatch(setStepLength(Number(e.target.value)))}
            >
              {stepLengths.map((m) => (
                <option
                  value={m}
                  label={m}
                  key={`seq-mode-opt-${m}`}
                />
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <div
          className="flex flex-row justify-start items-center"
        >
          {stepKeys.map((step) => (
            <div className={`w-5 h-5 m-1 text-center font-mono text-sm ${currentStep === (step - 1) ? 'text-green-700 dark:text-green-300' : ''} ${step > seqLength ? 'opacity-40' : null}`} key={`step-header-${step}`}>
              {step}
            </div>
          ))}
        </div>
        {Object.keys(steps).map((track, trackIndex) => (
          <SequencerTrack
            key={`sequencer-track-${trackIndex}`}
            track={track}
            steps={steps[track]}
            onStepClick={(step) => dispatch(toggleStep({ step, track }))}
          />
        ))}
      </div>
    </div>
  );
}

export default Sequencer;
