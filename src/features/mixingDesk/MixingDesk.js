import { Provider, useDispatch, useSelector } from 'react-redux';
import { mixingDeskStore } from '../../app/mixingDeskStore';
import Channel from '../../components/MixingDesk/Channel';
import { addChannel } from './mixingDeskSlice';
import { mixingDeskChannel } from './support';

function MixingDeskUnwrapped() {
  const { channels } = useSelector((state) => state.mixingDesk);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <div
        className="w-full flex flex-row justify-start items-center"
        style={{
          height: '9%'
        }}
      >
        <button
          type="button"
          className="border-2 rounded-md hover:border-blue-400 active:border-green-500 border-slate-400 p-1 text-lg font-mono font-bold"
          onClick={() => dispatch(addChannel({
            ...mixingDeskChannel,
            name: `Track ${channels.length + 1}`
          }))}
        >
          Add Track
        </button>
      </div>
      <div
        className="flex flex-row justify-start items-start p-1 w-full flex-1"
        style={{
          height: '88%'
        }}
      >
        {channels.map((ch, index) => (
          <Channel key={`${index}-channel`} channel={ch} />
        ))}
      </div>
    </div>
  );
}

function MixingDesk() {
  return (
    <Provider store={mixingDeskStore}>
      <MixingDeskUnwrapped />
    </Provider>
  );
}

export default MixingDesk;
