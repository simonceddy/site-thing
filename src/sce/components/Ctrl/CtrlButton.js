import { forwardRef } from 'react';
import './CtrlButton.css';

const CtrlButton = forwardRef(({ children, onClick, className }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    type="button"
    className={`ctrl-button ${className}`}
  >
    {children}
  </button>
));

export default CtrlButton;
