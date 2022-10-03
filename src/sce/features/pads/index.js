import { useDispatch, useSelector } from 'react-redux';
import PadButton from '../../components/Pads/PadButton';
import PadsContainer from '../../components/Pads/PadsContainer';
import { modes } from '../kernel/kernelSlice';
import { setSelectedTrack } from '../project/projectSlice';

const padKeys = [];

for (let i = 0; i < 16; i++) {
  padKeys[i] = 0;
}

function Pads() {
  const { selectedTrackId } = useSelector((state) => state.project);
  const { mode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();

  return (
    <PadsContainer>
      {padKeys.map((_v, idx) => (
        <PadButton
          onClick={() => {
            if (selectedTrackId !== idx && mode === modes.EDIT) {
              dispatch(setSelectedTrack(idx));
            } else if (mode === modes.PERF) {
              console.log('trigger drum pad');
            }
          }}
          key={`pad-button-${idx}`}
          className={selectedTrackId === idx ? 'selected-track' : ''}
        >
          {idx + 1}
        </PadButton>
      ))}
    </PadsContainer>
  );
}

export default Pads;
