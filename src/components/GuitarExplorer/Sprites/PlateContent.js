import {
  MatonPickupSelector, MatonPickupSwitch, MatonRotaryPot
} from './Controls';

function PlateContent() {
  return (
    <>
      <MatonPickupSelector />
      <MatonRotaryPot />
      <MatonRotaryPot x={62} y={54} />
      <MatonPickupSwitch />
    </>
  );
}

export default PlateContent;
