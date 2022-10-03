import { useRef } from 'react';
import { useSelector } from 'react-redux';
import DisplayContainer from '../../components/Display/DisplayContainer';
import './Display.css';

function Display() {
  const ref = useRef(null);
  const { darkMode } = useSelector((state) => state.display);
  return (
    <DisplayContainer>
      <div ref={ref} className={`display-screen ${darkMode ? 'dark-mode' : ''}`}>
        {}
      </div>
    </DisplayContainer>
  );
}

export default Display;
