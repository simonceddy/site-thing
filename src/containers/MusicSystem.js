import { Provider } from 'react-redux';
import Sequencer from '../features/audioSystem/sequencer/Sequencer';
import MasterClock from '../features/audioSystem/masterClock/MasterClock';
import { audioSystemStore } from '../app/audioSystemStore';
import Voices from '../features/audioSystem/voices/Voices';
import MasterChannel from '../components/AudioSystem/Mixer/MasterChannel';
// import Compressor from '../features/audioSystem/compressor/Compressor';

function MusicSystem() {
  return (
    <Provider store={audioSystemStore}>
      <div
        className="flex flex-col justify-start items-start p-2 m-2 border-2 border-blue-400 rounded"
        style={{
          width: 'auto'
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <MasterClock />
          <Sequencer />
        </div>
        <div className="w-full flex flex-row justify-between items-start">
          <Voices />
          <MasterChannel />
        </div>
        {/* <Compressor /> */}
        {}
      </div>
    </Provider>
  );
}

export default MusicSystem;
