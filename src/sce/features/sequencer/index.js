import SequencerContainer from '../../components/Sequencer/SequencerContainer';
import SequencerStepButton from '../../components/Sequencer/SequencerStepButton';

const emptySeqPage = [];

for (let i = 0; i < 16; i++) {
  emptySeqPage[i] = 0;
}

function Sequencer() {
  return (
    <SequencerContainer>
      {emptySeqPage.map((_v, idx) => (
        <SequencerStepButton key={`seq-step-button-${idx}`} />
      ))}
    </SequencerContainer>
  );
}

export default Sequencer;
