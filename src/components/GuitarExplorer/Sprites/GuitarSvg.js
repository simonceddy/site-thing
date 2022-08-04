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
        <linearGradient id="plate-fill">
          <stop
            style={{
              stopColor: colours && colours.plateFill
                ? colours.plateFill.value : 'rgb(0, 0, 0)'
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
        <linearGradient id="head-fill">
          {/* <title>emg-fill</title> */}
          <stop style={{
            stopColor: colours && colours.headFill
              ? colours.headFill.value : 'rgb(0, 0, 0)'
          }}
          />
        </linearGradient>
        <linearGradient id="matonpu-fill">
          <stop style={{
            stopColor: colours && colours.pickupFill
              ? colours.pickupFill.value : 'rgb(52, 64, 61)'
          }}
          />
        </linearGradient>
        <linearGradient id="fishman-c-fill">
          <stop style={{
            stopColor: colours && colours.pickupFill
              ? colours.pickupFill.value : 'rgb(222, 221, 219)'
          }}
          />
        </linearGradient>
        <linearGradient id="gradient-1-0" gradientUnits="userSpaceOnUse" x1="320" y1="1151.985" x2="320" y2="1235.969" gradientTransform="matrix(0.470817, -0.882231, 1.809865, 0.95256, -1991.598548, 338.979235)" xlinkHref="#fishman-m-fill" />
        <linearGradient id="fishman-m-fill">
          <stop offset="0" style={{ stopColor: 'rgb(23, 21, 24)' }} />
          <stop offset="1" style={{ stopColor: 'rgb(69, 65, 70)' }} />
        </linearGradient>
        <linearGradient id="np-fill">
          <title>np-fill</title>
          <stop style={{
            stopColor: colours && colours.nameplateFill
              ? colours.nameplateFill.value : 'rgb(0, 0, 0)'
          }}
          />
        </linearGradient>
        <linearGradient id="np-text">
          <title>np-text</title>
          <stop style={{
            stopColor: colours && colours.nameplateText
              ? colours.nameplateText.value : 'rgb(197, 197, 197)'
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
