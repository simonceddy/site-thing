import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayContainer from '../../components/Display/DisplayContainer';
import './Display.css';
import { displayModes, modes } from '../kernel/kernelSlice';
import TrackDisplayRow from '../../components/Display/TrackDisplayRow';
import { loadMetadata } from '../../util/storage';
import { initDisplay } from './displaySlice';

function getDarkMode() {
  return loadMetadata()
    .catch(console.error);
}

function Display() {
  const ref = useRef(null);
  const { darkMode } = useSelector((state) => state.display);
  const { mode, displayMode } = useSelector((state) => state.kernel);
  const {
    tempo, selectedTrackId, tracks, id
  } = useSelector((state) => state.project);
  const { loadedSequences } = useSelector((state) => state.sequencer);
  // console.log(tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    let init = false;
    if (!init) {
      getDarkMode()
        .then((data) => {
          if (data) dispatch(initDisplay(data));
        });
    }
    return () => {
      init = true;
    };
  }, []);
  return (
    <DisplayContainer>
      <div ref={ref} className={`display-screen text-xs ${darkMode ? 'dark-mode' : ''}`}>
        <div className={`flex flex-row w-full border-b justify-start items-start ${darkMode ? 'border-orange-300' : 'border-black'}`}>
          <div className={`border-r px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'}`}>
            {tempo} BPM
          </div>
          <div className={`border-r px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'}`}>
            {mode === modes.EDIT && 'Edit Mode'}
            {mode === modes.PERF && 'Perf Mode'}
            {mode === modes.KEYS && 'Keys Mode'}
          </div>
          <div className={`border-r px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'}`}>
            Track {(selectedTrackId + 1).toLocaleString(
            'en-US',
            {
              minimumIntegerDigits: 2,
              useGrouping: false
            }
          )}
          </div>
        </div>
        <div className="flex-1 w-full overflow-y-scroll whitespace-nowrap p-0.5">
          {displayMode === displayModes.PROJ ? (
            <div className="flex flex-col justify-start items-start">
              <div className="text-lg" style={{ marginBottom: '2px' }}>
                {id}
              </div>
              {tracks.map((track, idx) => (
                <TrackDisplayRow
                  darkMode={darkMode}
                  key={`track-${idx}-info`}
                  index={idx}
                  track={track}
                  sequence={loadedSequences[idx] || null}
                />
              ))}
            </div>
          ) : ''}
        </div>
        {}
      </div>
    </DisplayContainer>
  );
}

export default Display;
