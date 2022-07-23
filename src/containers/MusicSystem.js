import { Provider } from 'react-redux';
import Sequencer from '../features/sequencer/Sequencer';
import MasterClock from '../features/masterClock/MasterClock';
import { audioSystemStore } from '../app/audioSystemStore';
// import Compressor from '../features/compressor/Compressor';

function MusicSystem() {
  return (
    <Provider store={audioSystemStore}>
      <div className="flex flex-col justify-start items-start p-2 m-2 border-2 border-blue-400 rounded">
        <div className="flex flex-row justify-between items-center">
          <MasterClock />
          <Sequencer />
        </div>
        {/* <Compressor /> */}
        {}
      </div>
    </Provider>
  );
}

export default MusicSystem;
