import ChannelKnob from './ChannelKnob';
import SoloButton from '../AudioSystem/Shared/SoloButton';
import MuteButton from '../AudioSystem/Shared/MuteButton';
import ChannelFader from './ChannelFader';
import ChannelCompressor from './ChannelCompressor';

function Channel({ channel = {}, toggleMute, toggleSolo }) {
  return (
    <div
      className="flex flex-col justify-start items-center w-full p-1 bg-red-800 bg-opacity-30"
      style={{
        height: '95%',
        width: '120px'
      }}
    >
      <ChannelCompressor
        params={channel.comp}
        setParam={({ param, value }) => console.log(param, value)}
      />
      <div className="flex flex-row p-1">
        <MuteButton
          active={channel.mute || false}
          onClick={toggleMute}
        />
        <SoloButton
          active={channel.solo || false}
          onClick={toggleSolo}
        />
      </div>
      <ChannelKnob />
      <ChannelFader />
    </div>
  );
}

export default Channel;
