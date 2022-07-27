import { useEffect, useRef } from 'react';

function ChannelKnob({
  className = '',
  diameter = 35,
  value,
  min = 0,
  max = 1,
  step = 0.01,
  onChange,
  id = '',
  name = '',
  onDblClick
}) {
  const ref = useRef(null);
  useEffect(() => {
    let setup = false;
    if (ref.current && !setup) {
      //
      if (onChange) {
        ref.current.removeEventListener('input', onChange);
        ref.current.addEventListener('input', onChange);
      }
      if (onDblClick) {
        ref.current.removeEventListener('dblclick', onDblClick);
        ref.current.addEventListener('dblclick', onDblClick);
      }
    }
    return () => {
      setup = true;
    };
  }, [ref, onChange, onDblClick]);
  return (
    <input
      ref={ref}
      value={value}
      name={name}
      id={id}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      onDoubleClick={onDblClick}
      type="range"
      className={`input-knob ${className}`}
      data-diameter={diameter}
      data-fgcolor="#f0f"
      data-bgcolor="#0f0"
    />
  );
}

export default ChannelKnob;
