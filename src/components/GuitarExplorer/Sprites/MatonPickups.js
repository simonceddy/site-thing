function Pickups({ onClick }) {
  return (
    <g onClick={onClick}>
      {/* <title>pickups</title> */}
      <path d="M 420 1170 C 425 1165 570 1165 575 1170 C 580 1175 580.605 1239.395 575 1245 C 570 1250 425 1250 420 1245 C 414.395 1239.395 415 1175 420 1170 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#pickup-fill)' }} />
      <path d="M 420 1345 C 425 1340 570 1340 575 1345 C 580 1350 580.605 1414.395 575 1420 C 570 1425 425 1425 420 1420 C 414.395 1414.395 415 1350 420 1345 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#pickup-fill)' }} />
    </g>
  );
}

export default Pickups;
