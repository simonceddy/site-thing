import RotaryKnob from './RotaryKnob';

function ConsoleFader({ value, onChange }) {
  return (
    <div>
      <RotaryKnob
        className="m-1"
        diameter={45}
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ConsoleFader;
