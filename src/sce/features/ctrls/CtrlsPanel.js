import { useDispatch } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import ctrlsList from './ctrlsList';
import './CtrlsPanel.css';

function CtrlsPanel() {
  const dispatch = useDispatch();
  return (
    <div className="ctrls-panel flex flex-row flex-wrap">
      {ctrlsList.map(({
        id, action, fnAction, Component
      }, idx) => (
        Component ? (
          <Component key={`ctrl-button-${id || idx}`} />
        ) : (
          <CtrlButton
            key={`ctrl-button-${id || idx}`}
            className="bg-slate-400 active:bg-cyan-400"
            onClick={(e) => {
            // console.log(e);
              if (e.shiftKey && fnAction) {
                fnAction(dispatch);
              } else if (action) action(dispatch);
            }}
          />
        )))}
    </div>
  );
}

export default CtrlsPanel;
