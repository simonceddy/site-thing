import { toggleDarkMode } from '../display/displaySlice';
import EditModeButton from './EditModeButton';
import PerfModeButton from './PerfModeButton';

const ctrlsList = [
  {
    id: 'first',
    Component: EditModeButton
  },
  {
    id: 'second',
    Component: PerfModeButton
  },
  {
    id: 'third',
    action: () => {},
    fnAction: (dispatch) => {
      console.log('toggle dark mode');
      dispatch(toggleDarkMode());
    }
  },
  {},
  {},
  {},
  {},
  {},
  {},
];

export default ctrlsList;
