import { throttle } from 'lodash';
import { useEffect, useRef } from 'react';

function RotaryKnob({
  value, min, max, step, className, diameter, onChange, id, name, onDblClick
}) {
  const ref = useRef(null);
  const throttledOnChange = onChange ? throttle(onChange, 50) : false;
  const throttledOnDblClick = onDblClick ? throttle(onDblClick, 100) : false;
  useEffect(() => {
    let setup = false;
    if (ref.current && !setup) {
      //
      if (throttledOnChange) {
        ref.current.removeEventListener('input', throttledOnChange);
        ref.current.addEventListener('input', throttledOnChange);
      }
      if (throttledOnDblClick) {
        ref.current.removeEventListener('dblclick', throttledOnDblClick);
        ref.current.addEventListener('dblclick', throttledOnDblClick);
      }
    }
    return () => {
      setup = true;
    };
  }, [ref, onChange, onDblClick]);
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
      onDoubleClick={onDblClick}
    />
  );
}

export default RotaryKnob;
