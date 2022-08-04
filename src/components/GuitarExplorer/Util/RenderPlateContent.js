import RenderGuitarPart from './RenderGuitarPart';

function RenderPlateContent({
  parts: {
    pickupSelector = null,
    volumeKnob = null,
    pickupSwitch = null,
    toneKnob = null
  }
}) {
  return (
    <>
      <RenderGuitarPart part={pickupSelector} type="pickupSelector" />
      <RenderGuitarPart part={volumeKnob} type="volumeKnob" />
      <RenderGuitarPart part={toneKnob} type="toneKnob" />
      <RenderGuitarPart part={pickupSwitch} type="pickupSwitch" />
    </>
  );
}

export default RenderPlateContent;
