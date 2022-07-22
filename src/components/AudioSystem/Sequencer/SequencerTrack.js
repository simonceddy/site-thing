import { useSelector } from 'react-redux';

function SequencerTrack({ track, steps = [], onStepClick }) {
  const { currentStep, seqLength } = useSelector((state) => state.sequencer);

  return (
    <div
      className="flex flex-row justify-start items-center"
      id={`sequencer-track-${track}`}
    >
      {steps.map((active, index) => (
        <button
          type="button"
          key={`sequencer-button-${index}`}
          onClick={() => {
            if (onStepClick) {
              onStepClick(index);
            }
          }}
          className={`w-5 h-5 border-2 ${currentStep === index ? 'border-yellow-500' : 'border-slate-600'} ${active ? 'bg-green-500' : 'bg-gray-300'} m-1 rounded hover:border-blue-400 ${index < seqLength ? '' : 'bg-opacity-25'}`}
        >
          {}
        </button>
      ))}
    </div>
  );
}

export default SequencerTrack;
