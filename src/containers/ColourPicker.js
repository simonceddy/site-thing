import { ColorPicker, useColor } from 'react-color-palette';

function ColourPicker({
  onChange, colour = '#121212', height = 150, width = 150
}) {
  const [color, setColor] = useColor('hex', colour);

  const colourSetter = (args) => {
    if (onChange) onChange(args);
    setColor(args);
  };

  return (
    <ColorPicker
      width={width}
      height={height}
      color={color}
      onChange={colourSetter}
      hideHSV
      hideHEX
      hideRGB
      dark
    />
  );
}

export default ColourPicker;
