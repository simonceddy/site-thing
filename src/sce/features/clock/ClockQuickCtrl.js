import { useSelector } from 'react-redux';
import './ClockQuickCtrl.css';

function ClockQuickCtrl() {
  const { tempo } = useSelector((state) => state.project);
  const { booted } = useSelector((state) => state.kernel);
  return (
    <div className="clock-quick-ctrl-container flex flex-row justify-around items-center">
      <div className="bg-black clock-quick-ctrl-bpm text-red-400 italic text-3xl">
        {booted ? tempo : '888'}
      </div>
      {}
    </div>
  );
}

export default ClockQuickCtrl;
