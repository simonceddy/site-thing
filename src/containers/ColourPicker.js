import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

function ColourPicker({ onChange, colour = '#121212' }) {
  const [color, setColor] = useColor('hex', colour);

  const colourSetter = (args) => {
    if (onChange) onChange(args);
    setColor(args);
  };

  return (
    <ColorPicker
      width={200}
      height={200}
      color={color}
      onChange={colourSetter}
      hideHSV
      dark
    />
  );
}

export default ColourPicker;
