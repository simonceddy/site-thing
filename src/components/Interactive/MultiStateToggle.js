import { useEffect, useState } from 'react';
import CircleButtonLabel from '../Shared/CircleButtonLabel';
import StaticCircle from '../Shared/StaticCircle';
import './MultiStateToggle.css';

function MultiStateToggle({
  children,
  onChange,
  states = 4,
  id
}) {
  const btnStates = states || 4;
  const [currentState, setCurrentState] = useState(0);

  const onClickHandler = (e) => {
    // console.log(e);
    if (e.shiftKey) return setCurrentState(0);
    if (e.altKey) return setCurrentState(currentState > 0 ? currentState - 1 : states - 1);
    if (currentState >= btnStates - 1) {
      return setCurrentState(0);
    }
    return setCurrentState(currentState + 1);
  };

  useEffect(() => {
    if (onChange) onChange(currentState);
  }, [currentState]);

  return (
    <button
      id={id}
      type="button"
      onClick={onClickHandler}
      className={`p-1 flex text-black dark:text-white flex-col justify-between items-center mx-1 mtoggle mtoggle-state-${currentState || 0}`}
    >
      <StaticCircle diameter="40px" />
      <CircleButtonLabel>
        {children}
      </CircleButtonLabel>
    </button>
  );
}

export default MultiStateToggle;
