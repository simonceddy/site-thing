import { NavLink } from 'react-router-dom';
import CircleButtonLabel from '../Shared/CircleButtonLabel';
import StaticCircle from '../Shared/StaticCircle';
import './LgCircleNavlink.css';

function LgCircleNavlink({ children, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className="p-1 flex text-black dark:text-white flex-col justify-between items-center lg-circle-button mx-1"
    >
      <StaticCircle diameter="40px" />
      <CircleButtonLabel>
        {children}
      </CircleButtonLabel>
    </NavLink>
  );
}

export default LgCircleNavlink;
