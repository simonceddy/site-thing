function Nameplate({
  content = 'MASTERSOUND', fontFamily = 'Arial, sans-serif'
}) {
  return (
    <g>

      <path d="M 450 1150 L 545 1150 C 550 1150 550 1165 545 1165 L 450 1165 C 445 1165 445 1150 450 1150 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#np-fill)' }}>
        {/* <title>nameplate</title> */}
      </path>
      <text
        style={{
          textAnchor: 'middle',
          fill: 'url(#np-text)',
          fontFamily,
          fontSize: '10px',
          fontWeight: '700',
          whiteSpace: 'pre'
        }}
        y="1161.88"
        x="496.833"
      >
        {/* <title>nameplate-text</title> */}
        {content}
      </text>
      <g>
        <path d="M 544 1159 C 544 1160.657 542.657 1162 541 1162 C 539.343 1162 538 1160.657 538 1159 C 538 1157.343 539.343 1156 541 1156 C 542.657 1156 544 1157.343 544 1159 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#np-fill)' }} />
        <path d="M 541.038 1157.156 L 540.98 1160.726 M 539.165 1158.978 L 542.724 1158.941" style={{ stroke: 'url(#std-stroke)', fill: 'url(#np-fill)' }} />
      </g>
      <g transform="matrix(1, 0, 0, 1, -88, 0)">
        <path d="M 544 1159 C 544 1160.657 542.657 1162 541 1162 C 539.343 1162 538 1160.657 538 1159 C 538 1157.343 539.343 1156 541 1156 C 542.657 1156 544 1157.343 544 1159 Z" style={{ stroke: 'url(#std-stroke)', fill: 'url(#np-fill)' }} />
        <path d="M 541.038 1157.156 L 540.98 1160.726 M 539.165 1158.978 L 542.724 1158.941" style={{ stroke: 'url(#std-stroke)', fill: 'url(#np-fill)' }} />
      </g>
    </g>
  );
}

export default Nameplate;
