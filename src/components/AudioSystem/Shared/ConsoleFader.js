import { throttle } from 'lodash';
import { useEffect, useRef } from 'react';
// import RotaryKnob from './RotaryKnob';

function ConsoleFader({ value, onChange, onDblClick }) {
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
    <div>
      <input
        type="range"
        className="m-1 input-slider"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={onChange}
        onDoubleClick={onDblClick}
        data-height={230}
        data-width={30}
        data-fgcolor="red"
        data-bgcolor="blue"
      />
    </div>
  );
}

export default ConsoleFader;
