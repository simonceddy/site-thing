import ConsoleFader from '../Shared/ConsoleFader';
import MuteButton from '../Shared/MuteButton';
import SoloButton from '../Shared/SoloButton';

function MixerChannel({ trackName, volume = 0 }) {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="font-bold font-mono">
        {trackName}
      </div>
      <div className="flex flex-row p-1">
        <MuteButton /><SoloButton />
      </div>
      <ConsoleFader value={volume} />
    </div>
  );
}

export default MixerChannel;
