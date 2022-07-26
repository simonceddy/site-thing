import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPanningFor, setVolumeFor, toggleMuteFor, /* toggleSoloFor */
} from '../../../features/audioSystem/mixer/mixerSlice';
import MuteButton from '../Shared/MuteButton';
import RotaryKnob from '../Shared/RotaryKnob';
// import SoloButton from '../Shared/SoloButton';

function MixerChannel({ track, voice }) {
  // console.log(track);
  const {
    mute, /* solo,  */volume, panning
  } = useSelector((state) => state.mixer.tracks[track]);
  const dispatch = useDispatch();
  // TODO Wad object updates when changing voice source
  useEffect(() => {
    console.log(track);
  }, [track]);
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="flex flex-row p-1">
        <MuteButton
          active={mute}
          onClick={() => {
            if (voice.setVolume) {
              if (!mute) {
                voice.setVolume(0);
              } else {
                voice.setVolume(volume);
              }
            }
            dispatch(toggleMuteFor(track));
          }}
        />
        {/* <SoloButton
          active={solo}
          onClick={() => {
            dispatch(toggleSoloFor(track));
          }}
        /> */}
      </div>
      <div className="flex flex-col justify-center items-center w-full my-1">
        <span className="font-mono text-sm">Volume</span>
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
            if (voice.setVolume) {
              voice.setVolume(val);
            }
            dispatch(setVolumeFor({ track, value: val }));
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full my-1">
        <span className="font-mono text-sm">Panning</span>
        <RotaryKnob
          value={panning}
          diameter={45}
          min={-1}
          max={1}
          step={0.01}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (voice.setPanning) voice.setPanning(val);
            dispatch(setPanningFor({ track, value: val }));
          }}
          onDblClick={() => {
            if (voice.setPanning) voice.setPanning(0);
            dispatch(setPanningFor({ track, value: 0 }));
          }}
        />
      </div>
    </div>
  );
}

export default MixerChannel;
