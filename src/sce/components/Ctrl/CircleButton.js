import { forwardRef } from 'react';
import './CircleButton.css';

const CircleButton = forwardRef(({
  children, onClick, diameter = 30, className
}, ref) => (
  <button
    ref={ref}
    className={`rounded-full circle-button ${className}`}
    type="button"
    onClick={onClick}
    style={{
      width: `${diameter}px`,
      height: `${diameter}px`,
    }}
  >
    {children}
  </button>
));

export default CircleButton;
