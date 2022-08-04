export const buildPresets = {
  currentBuild: {
    name: 'Current',
    parts: {
      neckPickup: 'emg60',
      bridgePickup: 'emg85',
      strings: 'ernieBallChunky',
      neck: null,
      plate: 'matonPlate',
      nameplate: null,
      pickupSelector: 'blackKnobSelector',
      volumeKnob: 'blackKnob',
      toneKnob: 'blackKnob',
      pickupSwitch: 'none'
    },
    colours: {
      bodyFill: '#000000',
      pickupFill: '#000000',
      hardwareFill: '#757575',
      stdStroke: '#c8c8c8',
      stringColour: '#acacac',
      fretboardFill: '#000000',
      headFill: '#000000',
      plateFill: '#000000',
      nameplateFill: '#c8c8c8',
      nameplateText: '#000000',
      // neckFill: '#000000',
    },
    nameplateContent: '~ eddy ~'
  },
  originalBuild: {
    name: 'Original',
    parts: {
      neckPickup: 'matonSingleCoil',
      bridgePickup: 'matonSwitchable',
      strings: null,
      neck: null,
      plate: 'matonPlate',
      nameplate: null,
      pickupSelector: 'matonPickupSelector',
      volumeKnob: 'matonKnob',
      toneKnob: 'matonKnob',
      pickupSwitch: 'matonPickupSwitch'
    },
    colours: {
      bodyFill: '#000000',
      pickupFill: '#bebebe',
      hardwareFill: '#757575',
      stdStroke: '#040404',
      stringColour: '#a1a1a1',
      fretboardFill: '#000000',
      headFill: '#000000',
      plateFill: '#000000',
      nameplateFill: '#000000',
      nameplateText: '#c5c5c5',
      // neckFill: '#000000',
    },
    nameplateContent: 'MASTERSOUND'
  }
};
