import { toggleDarkMode } from '../display/displaySlice';
import EditModeButton from './EditModeButton';
import PerfModeButton from './PerfModeButton';
import PlayButton from './PlayButton';
import ProjectButton from './ProjectButton';

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
    fnLabel: 'DARK',
    id: 'third',
    action: () => {},
    fnAction: (dispatch) => {
      console.log('toggle dark mode');
      dispatch(toggleDarkMode());
    }
  },
  {
    id: 'show-project',
    Component: ProjectButton
  },
  {
    fnLabel: 'load',
    content: '↑'
  },
  {},
  {
    content: '←'
  },
  {
    content: '↓'
  },
  {
    content: '→'
  },
  {
    id: 'play-button',
    Component: PlayButton
  }
];

export default ctrlsList;
