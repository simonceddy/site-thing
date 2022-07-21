import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { setTempo } from './masterClockSlice';

function MasterClock() {
  const tempo = useSelector((state) => state.masterClock.tempo);
  const dispatch = useDispatch();

  const tempoHandler = throttle((e) => dispatch(setTempo(Number(e.target.value))), 100);
  return (
    <div>
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
  );
}

export default MasterClock;
