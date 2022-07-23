import { throttle } from 'lodash';
import { useEffect, useRef } from 'react';

function RotaryKnob({
  value, min, max, step, className, diameter, onChange, id, name
}) {
  const ref = useRef(null);
  useEffect(() => {
    let setup = false;
    if (onChange && ref.current && !setup) {
      //
      ref.current.addEventListener('input', throttle(onChange, 50));
    }
    return () => {
      setup = true;
    };
  }, [ref]);
  return (
    <input
      id={id}
      name={name}
      data-diameter={`${diameter}`}
      className={`${className} input-knob`}
      type="range"
      ref={ref}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
}

export default RotaryKnob;
