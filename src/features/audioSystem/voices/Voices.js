import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MixerChannel from '../../../components/AudioSystem/Mixer/MixerChannel';
import { allVoices, loadVoices } from '../../../support/audioSystem';
import { setVoice } from './voicesSlice';

const voiceOptions = Object.values(allVoices);

// function printSrc(src = '') {
//   return src.replace(/^\/seq\/samples\//, '');
// }

function Voices() {
  const { tracks } = useSelector((state) => state.voices);
  const {
    steps, currentStep, direction, tick
  } = useSelector((state) => state.sequencer);
  const { playing } = useSelector((state) => state.masterClock);
  // const { tracks: channels } = useSelector((state) => state.mixer);
  const dispatch = useDispatch();
  const voices = useMemo(
    () => loadVoices(Object.values(tracks)),
    [tracks]
  );

  const playVoices = async () => {
    await Promise.all(Object.values(steps).map(async (track, id) => {
      if (track[currentStep] && voices[id]) {
        await voices[id].play();
      }
    }));
  };

  useEffect(() => {
    if (playing) playVoices(currentStep, steps);
  }, [currentStep, playing, direction, tick]);

  // console.log(tracks);
  return (
    <div className="flex flex-row justify-start items-start">
      {Object.keys(tracks).map((trackKey, index) => (
        <div
          key={`track-info-box-${trackKey}`}
          className="border-2 rounded m-2 p-2 border-blue-400 flex flex-col justify-start items-center w-32"
        >
          <h3 className="font-mono font-bold my-1">{trackKey}</h3>
          {/* <span>Sample</span>
          <span
            className="text-sm font-mono italic overflow-ellipsis
            overflow-x-scroll whitespace-nowrap w-full pb-2">
            {printSrc(tracks[trackKey].src)}
          </span> */}
          <select
            value={tracks[trackKey].key}
            className="bg-black w-28 my-1 font-mono text-sm"
            onChange={(e) => dispatch(setVoice({
              track: trackKey,
              voice: allVoices[e.target.value]
            }))}
          >
            {voiceOptions.map((v) => (
              <option key={v.key} label={v.name} value={v.key} />
            ))}
          </select>
          <MixerChannel track={trackKey} voice={voices[index]} />
        </div>
      ))}
    </div>
  );
}

export default Voices;
