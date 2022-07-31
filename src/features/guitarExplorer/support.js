import BodyPlate from '../../components/GuitarExplorer/Sprites/BodyPlate';
import {
  EMG85,
  EMG60,
  MatonSingleCoil,
  MatonSwitchable
} from '../../components/GuitarExplorer/Sprites/Pickups';
import FishmanFluenceClassic from '../../components/GuitarExplorer/Sprites/Pickups/FishmanFluenceClassic';
import FishmanM from '../../components/GuitarExplorer/Sprites/Pickups/FishmanM';
import FishmanOpen from '../../components/GuitarExplorer/Sprites/Pickups/FishmanOpen';

export const guitarInfo = {
  url: 'https://maton.com.au/product/ms500',
  maker: 'Maton',
  model: 'MS500',
  pickups: {
    neck: 'EMG60',
    bridge: 'EMG85'
  },
  strings: 'Ernie Ball etc',
  misc: '',
};

export const defaultViewBox = {
  x: 0, y: 0, w: 650, h: 1750
};

export const articles = {
  summary: {
    title: 'Info',
    body: 'Hello'
  },
  guitarBody: {
    title: 'Guitar body',
    body: 'This is still the original guitar body! Mostly... It has been routed out to fit EMG sized pickups and a battery pack, which is accessible from the back of the body.'
  },
  guitarNeck: {
    title: 'Guitar Neck',
    body: 'This is the second neck this guitar had. Whoops!'
  },
  headAndTuners: {
    title: 'Guitar head and tuning pegs',
    body: 'The tuning pegs have also been replaced, and sort of fit, and the nut has been sanded back to fit my chunky strings.'
  },
  bridge: {
    title: 'Bridge',
    body: 'This is the original bridge! (I think).'
  },
  originalPickups: {
    title: 'Pickups',
    body: 'These are the original pickups that are no longer in the guitar. I have them in a box. The neck is single coil, while the bridge pickup is switchable between single coil and humbucker.'
  }
};

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
  },
  plate: {
    none: {},
    matonPlate: {
      name: 'Standard Maton Plate',
      Component: BodyPlate,
    }
  },
  strings: {
    ernieBallChunky: {}
  },
  pickupSelector: {
    matonPickupSelector: {},
    blackKnobSelector: {}
  },
  volumeKnob: {
    matonKnob: {},
    blackKnob: {}
  },
  toneKnob: {
    matonKnob: {},
    blackKnob: {}
  },
  pickupSwitch: {
    none: {},
    matonPickupSwitch: {}
  },
  neck: {
    matonNeck: {}
  }
};

export function makePartsArray(parts = {}) {
  return Object.keys(parts).map((key) => ({
    key,
    ...parts[key]
  }));
}

export function getPartsFor(key) {
  switch (key) {
    case 'neckPickup':
    case 'bridgePickup':
      return makePartsArray(guitarParts.pickups);
    default:
      return guitarParts[key] ? makePartsArray(guitarParts[key]) : [];
  }
}
