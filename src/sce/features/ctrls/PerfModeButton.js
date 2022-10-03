import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { modes, setMode } from '../kernel/kernelSlice';

function PerfModeButton() {
  const { mode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  return (
    <CtrlButton
      className={`active:bg-cyan-400 ${mode === modes.PERF ? 'bg-orange-400' : 'bg-slate-400'}`}
      onClick={() => {
        if (mode !== modes.PERF) dispatch(setMode(modes.PERF));
      }}
    />
  );
}

export default PerfModeButton;
