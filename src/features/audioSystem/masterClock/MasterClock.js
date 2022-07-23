/* eslint-disable no-unused-vars */
import { throttle } from 'lodash';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RotaryKnob from '../../../components/AudioSystem/Shared/RotaryKnob';
import { setTempo } from './masterClockSlice';

function MasterClock() {
  const { tempo, playing } = useSelector((state) => state.masterClock);
  const dispatch = useDispatch();

  const intervalRef = useRef(null);

  // const intervalHandler = () => {
  //   clearInterval(intervalRef.current);
  //   if (playing) {
  //     // set up interval
  //     intervalRef.current = setInterval(() => {
  //       dispatch(nextStep());
  //     }, (60 / tempo) * 1000);
  //   }
  // };

  const tempoHandler = throttle((e) => dispatch(setTempo(Number(e.target.value))), 100);
  return (
    <div>
      <div className="p-2 w-full">
        <label htmlFor="tempo-slider" className="flex flex-col justify-start items-start mx-2 p-1">
          <span className="flex flex-row justify-between items-center w-20 mx-1 my-2 italic font-mono py-1 px-2 border border-green-400">
            <span className="rounded flex-1 text-right mr-1">{tempo}</span>
            <span>BPM</span>
          </span>
          <RotaryKnob
            min={20}
            max={400}
            step={1}
            diameter="80"
            id="tempo-slider"
            name="tempo-slider"
            value={tempo}
            onChange={tempoHandler}
          />
        </label>
      </div>
    </div>
  );
}

export default MasterClock;
