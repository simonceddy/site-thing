import { BlackRotaryPot, EmptyPickupSwitch } from './Controls';

function BlackKnobs() {
  return (
    <g>
      {/* <title>black-knobs</title> */}
      <g>
        {/* <title>pickupselector</title> */}
        <BlackRotaryPot />
      </g>
      <g>
        {/* <title>vol-knob</title> */}
        <BlackRotaryPot x={-62} y={30} />
      </g>
      <BlackRotaryPot y={86} />
      <EmptyPickupSwitch />
    </g>
  );
}

export default BlackKnobs;
