import { useDispatch, useSelector } from 'react-redux';
import {
  setPanningFor, setVolumeFor, toggleMuteFor, toggleSoloFor
} from '../../../features/audioSystem/mixer/mixerSlice';
import ConsoleFader from '../Shared/ConsoleFader';
import MuteButton from '../Shared/MuteButton';
import RotaryKnob from '../Shared/RotaryKnob';
import SoloButton from '../Shared/SoloButton';

function MixerChannel({ track, voice }) {
  console.log(track);
  const {
    mute, solo, volume, panning
  } = useSelector((state) => state.mixer.tracks[track]);
  const dispatch = useDispatch();
  // TODO rerenders for Wad param updates
  // TODO state for mixer params
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex flex-row p-1">
        <MuteButton
          active={mute}
          onClick={() => {
            dispatch(toggleMuteFor(track));
          }}
        />
        <SoloButton
          active={solo}
          onClick={() => {
            dispatch(toggleSoloFor(track));
          }}
        />
      </div>
      <ConsoleFader
        value={volume}
        onChange={(e) => {
          const val = Number(e.target.value);
          if (voice.setVolume) voice.setVolume(val);
          dispatch(setVolumeFor({ track, value: val }));
        }}
      />
      <RotaryKnob
        value={panning}
        diameter={45}
        min={-50}
        max={50}
        step={1}
        onChange={(e) => {
          const val = Number(e.target.value);
          if (voice.setPanning) voice.setPanning(val);
          dispatch(setPanningFor({ track, value: val }));
        }}
      />
    </div>
  );
}

export default MixerChannel;
