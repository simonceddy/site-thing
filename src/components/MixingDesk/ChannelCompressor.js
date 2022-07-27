import ChannelKnob from './ChannelKnob';

function ChannelCompressor({ params = {}, setParam }) {
  return (
    <div>
      <ChannelKnob
        diameter="30"
        value={params.attack}
        onChange={(e) => {
          if (setParam) setParam({ param: 'attack', value: e.target.value });
        }}
      />
    </div>
  );
}

export default ChannelCompressor;
