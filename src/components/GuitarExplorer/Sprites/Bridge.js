function Bridge({ onClick }) {
  return (
    <g onClick={onClick}>
      {/* <title>bridge</title> */}
      <path d="M 435 1455 L 565 1445 C 572.506 1443.858 572.506 1458.858 565 1460 L 435 1470 C 432.594 1470.847 424.257 1458.78 435 1455 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#hardware-fill)' }} />
      <path d="M 430 1515 L 570 1515 C 596.822 1517.008 588.401 1540.034 570 1540 L 430 1540 C 415.821 1539.935 409.813 1518.048 430 1515 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#hardware-fill)' }} />
    </g>
  );
}

export default Bridge;
