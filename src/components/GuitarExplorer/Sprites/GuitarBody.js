function GuitarBody({ onClick }) {
  return (
    <g onClick={onClick}>
      {/* <title>body</title> */}
      <path d="M 450 1020 C 450 1020 440 1035 420 1035 C 390 1035 390 985 345 985 C 303.182 985 278.197 1030.056 280 1070 C 282.291 1120.758 329.377 1160.313 340 1210 C 342.568 1222.014 345.494 1244.011 340 1255 C 310 1315 215 1360 225 1480 C 238.313 1639.758 390.965 1695.151 505.522 1691.045 C 623.189 1686.828 780 1640 780.54 1469.382 C 781.044 1310 660 1275 655 1210 C 652.383 1175.974 678.795 1154.411 694 1124 C 696 1120 691.833 1092.1 680 1085 C 651.079 1067.647 615 1105 590 1105 C 563.074 1105 550 1055 550 1055 L 450 1020 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#body-fill)' }} />
      <path d="M 450 1030 C 450 1030 440 1050 420 1050 C 390 1050 367.263 991.732 331.808 990.937 C 290 990 278.197 1040.056 280 1080 C 282.291 1130.758 329.377 1170.313 340 1220 C 342.568 1232.014 346.321 1244.465 340 1255 C 310 1305 215 1370 225 1490 C 238.313 1649.758 382.046 1703.237 506 1698 C 574.378 1695.111 641.327 1681.048 692 1648 C 738 1618 782.334 1555.399 780.54 1479.382 C 776.78 1320.044 658.202 1300.113 655 1235 C 652 1174 726 1128 680 1095 C 652.595 1075.34 620 1120 590 1120 C 553.599 1120 540 1070 540 1070 L 450 1030 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#body-fill)' }} />
    </g>
  );
}

export default GuitarBody;
