import ConsoleFader from '../Shared/ConsoleFader';
import MuteButton from '../Shared/MuteButton';
import SoloButton from '../Shared/SoloButton';

function MixerChannel() {
  return (
    <div className="flex flex-col justify-start items-center">
      {}
      <MuteButton /><SoloButton />
      <ConsoleFader />
    </div>
  );
}

export default MixerChannel;
