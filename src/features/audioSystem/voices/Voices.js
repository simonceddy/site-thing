import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import MixerChannel from '../../../components/AudioSystem/Mixer/MixerChannel';
import { loadVoices } from '../../../support/audioSystem';

function Voices() {
  const { tracks } = useSelector((state) => state.voices);
  const {
    steps, currentStep, direction
  } = useSelector((state) => state.sequencer);
  const { playing } = useSelector((state) => state.masterClock);

  const voices = useMemo(() => loadVoices(Object.values(tracks)), [tracks]);

  const playVoices = async () => {
    await Promise.all(Object.values(steps).map(async (track, id) => {
      if (track[currentStep] && voices[id]) {
        await voices[id].play();
      }
    }));
  };

  useEffect(() => {
    if (playing) playVoices(currentStep, steps);
  }, [currentStep, playing, direction]);

  return (
    <div className="flex flex-row justify-start items-start">
      {Object.keys(tracks).map((trackKey) => (
        <div
          key={`track-info-box-${trackKey}`}
          className="border-2 rounded m-2 p-2 border-blue-400 flex flex-col justify-start items-start"
        >
          <h3 className="font-mono font-bold">{trackKey}</h3>
          <span className="text-sm font-mono italic">
            Source: {tracks[trackKey].src}
          </span>
          <MixerChannel track={trackKey} />
        </div>
      ))}
    </div>
  );
}

export default Voices;
