import { useRef, useState } from 'react';
import { defaultViewBox } from '../features/guitarExplorer/support';

function useSvgZoom(viewBox = defaultViewBox) {
  const ref = useRef(null);
  const [vb, setVb] = useState({
    ...defaultViewBox,
    ...viewBox
  });
  const svgSize = { w: vb.w, h: vb.h };

  const [scale, setScale] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });

  const setViewbox = (params = defaultViewBox) => {
    if (ref.current && ref.current.setAttribute) {
      // console.log('svg found', params);
      ref.current.setAttribute('viewbox', `${params.x} ${params.y} ${params.w} ${params.h}`);
    }
    setVb(params);
  };

  const zoomHandler = (e) => {
    e.preventDefault();
    // console.log('zoom handling');
    const { w } = vb;
    const { h } = vb;
    const mx = e.nativeEvent.offsetX;// mouse x
    const my = e.nativeEvent.offsetY;
    // console.log();
    const dw = w * Math.sign(e.deltaY) * 0.05;
    const dh = h * Math.sign(e.deltaY) * 0.05;
    const dx = (dw * mx) / svgSize.w;
    const dy = (dh * my) / svgSize.h;
    setScale(svgSize.w / vb.w);
    setZoom(Math.round(scale * 100) / 100);
    setViewbox({
      x: vb.x + dx, y: vb.y + dy, w: vb.w - dw, h: vb.h - dh
    });
    console.log(scale, zoom);
  };

  const onMouseDown = (e) => {
    setIsPanning(true);
    // console.log(e.nativeEvent.x, e.nativeEvent.y);
    setStartPoint({ x: e.nativeEvent.x, y: e.nativeEvent.y });
  };

  const onMouseMove = (e) => {
    if (isPanning) {
      const endPoint = { x: e.nativeEvent.x, y: e.nativeEvent.y };
      const dx = (startPoint.x - endPoint.x) / scale;
      const dy = (startPoint.y - endPoint.y) / scale;
      const movedViewBox = {
        x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h
      };
      setViewbox(movedViewBox);
    }
  };

  const onMouseUp = (e) => {
    if (isPanning) {
      const endPoint = { x: e.nativeEvent.x, y: e.nativeEvent.y };
      const dx = (startPoint.x - endPoint.x) / scale;
      const dy = (startPoint.y - endPoint.y) / scale;
      setIsPanning(false);
      setViewbox({
        x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h
      });
    }
  };

  const onMouseLeave = () => setIsPanning(false);

  return {
    ref,
    zoom,
    scale,
    zoomHandler,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    viewBox: vb
  };
}

export default useSvgZoom;
