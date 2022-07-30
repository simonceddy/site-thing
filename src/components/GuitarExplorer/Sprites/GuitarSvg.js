import { forwardRef } from 'react';
import { defaultViewBox } from '../../../features/guitarExplorer/support';

const GuitarSvg = forwardRef(({
  children,
  colours = {},
  viewBox = defaultViewBox,
}, ref) => {
  const vb = { ...defaultViewBox, ...viewBox };
  return (
    <svg
      ref={ref}
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="body-fill">
          <stop
            style={{
              stopColor: colours && colours.bodyFill
                ? colours.bodyFill.value : 'rgb(0, 0, 0)'
            }}
          />
        </linearGradient>
        <linearGradient id="std-stroke">
          <stop
            style={{
              stopColor: colours && colours.stdStroke
                ? colours.stdStroke.value : 'rgb(200, 200, 200)'
            }}
          />
        </linearGradient>
        <linearGradient id="hardware-fill">
          <stop
            style={{
              stopColor: colours && colours.hardwareFill
                ? colours.hardwareFill.value : 'rgb(117, 117, 117)'
            }}
          />
        </linearGradient>
        <linearGradient id="string-colour">
          <stop
            style={{
              stopColor: colours && colours.stringColour
                ? colours.stringColour.value : 'rgb(172, 172, 172)'
            }}
          />
        </linearGradient>
        <linearGradient id="pickup-fill">
          <stop
            style={{
              stopColor: colours && colours.pickupFill
                ? colours.pickupFill.value : 'rgb(117, 117, 117)'
            }}
          />
        </linearGradient>
        <linearGradient id="emg-fill">
          {/* <title>emg-fill</title> */}
          <stop style={{
            stopColor: colours && colours.pickupFill
              ? colours.pickupFill.value : 'rgb(0, 0, 0)'
          }}
          />
        </linearGradient>
        <linearGradient id="fretboard-fill">
          {/* <title>emg-fill</title> */}
          <stop style={{
            stopColor: colours && colours.fretboardFill
              ? colours.fretboardFill.value : 'rgb(0, 0, 0)'
          }}
          />
        </linearGradient>
        <linearGradient id="neck-fill">
          {/* <title>emg-fill</title> */}
          <stop style={{
            stopColor: colours && colours.neckFill
              ? colours.neckFill.value : 'rgb(0, 0, 0)'
          }}
          />
        </linearGradient>
      </defs>
      <g transform="matrix(1, 0, 0, 1, -178, -12)">
        {/* <title>gtr-front</title> */}
        {children}
      </g>
    </svg>
  );
});

export default GuitarSvg;
