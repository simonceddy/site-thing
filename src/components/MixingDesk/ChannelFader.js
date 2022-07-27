import { useEffect, useRef } from 'react';

function ChannelFader({
  value, onChange, onDoubleClick
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
      if (onDoubleClick) {
        ref.current.removeEventListener('dblclick', onDoubleClick);
        ref.current.addEventListener('dblclick', onDoubleClick);
      }
    }
    return () => {
      setup = true;
    };
  }, [ref, onChange, onDoubleClick]);
  return (
    <input
      ref={ref}
      type="range"
      className="input-slider"
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={onChange}
      onDoubleClick={onDoubleClick}
      data-width="30"
      data-height="200"
      data-fgcolor="#f0f"
      data-bgcolor="#0f0"
    />
  );
}

export default ChannelFader;
