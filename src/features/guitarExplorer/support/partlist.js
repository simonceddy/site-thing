import BodyPlate from '../../../components/GuitarExplorer/Sprites/BodyPlate';
import {
  BlackRotaryPot,
  EmptyPickupSwitch,
  MatonPickupSelector,
  MatonPickupSwitch,
  MatonRotaryPot
} from '../../../components/GuitarExplorer/Sprites/Controls';
import {
  EMG85,
  EMG60,
  MatonSingleCoil,
  MatonSwitchable
} from '../../../components/GuitarExplorer/Sprites/Pickups';
import FishmanFluenceClassic from '../../../components/GuitarExplorer/Sprites/Pickups/FishmanFluenceClassic';
import FishmanM from '../../../components/GuitarExplorer/Sprites/Pickups/FishmanM';
import FishmanOpen from '../../../components/GuitarExplorer/Sprites/Pickups/FishmanOpen';
import Strings from '../../../components/GuitarExplorer/Sprites/Strings';

export const guitarParts = {

  pickups: {
    matonSingleCoil: {
      name: 'Maton single coil',
      Component: MatonSingleCoil
    },
    emg60: {
      name: 'EMG60',
      Component: EMG60,
    },
    matonSwitchable: {
      name: 'Maton switchable humbucker',
      Component: MatonSwitchable,
    },
    emg85: {
      name: 'EMG85',
      Component: EMG85,
    },
    fishmanFluenceClassic: {
      name: 'Fishman Fluence Classic',
      Component: FishmanFluenceClassic,
    },
    fishmanCustomMattHeafy: {
      name: 'Fishman Custom Matt Heafy',
      Component: FishmanM,
    },
    fishmanOpen: {
      name: 'Fishman Open Core Classic',
      Component: FishmanOpen,
    },
    none: {
      name: 'None',
      Component: () => null
    },
  },
  plate: {
    none: {
      name: 'None',
      Component: () => null
    },
    matonPlate: {
      name: 'Standard Maton Plate',
      Component: BodyPlate,
    }
  },
  strings: {
    ernieBallChunky: {
      name: 'Ernie Ball Chunky',
      Component: Strings
    }
  },
  pickupSelector: {
    matonPickupSelector: {
      name: 'Maton Pickup Selector',
      Component: MatonPickupSelector
    },
    blackKnobSelector: {
      name: 'Black Knob Selector',
      Component: BlackRotaryPot
    }
  },
  volumeKnob: {
    matonKnob: {
      name: 'Maton Knob',
      Component: MatonRotaryPot
    },
    blackKnob: {
      name: 'Black Knob',
      Component: (props) => <BlackRotaryPot {...props} x={-62} y={30} />
    }
  },
  toneKnob: {
    matonKnob: {
      name: 'Maton Knob',
      Component: (props) => <MatonRotaryPot {...props} x={62} y={54} />
    },
    blackKnob: {
      name: 'Black Knob',
      Component: (props) => <BlackRotaryPot {...props} y={86} />
    }
  },
  pickupSwitch: {
    none: {
      name: 'None',
      Component: EmptyPickupSwitch
    },
    matonPickupSwitch: {
      name: 'Maton Bridge PU toggle',
      Component: MatonPickupSwitch
    }
  },
  neck: {
    matonNeck: {}
  }
};
