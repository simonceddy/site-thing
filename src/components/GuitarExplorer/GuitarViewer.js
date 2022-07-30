function GuitarViewer({
  children,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onMouseMove,
  onScroll
}) {
  return (
    <div
      role="presentation"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onScroll={onScroll}
      // onTouchMove={onScroll}
      onWheel={onScroll}
      className="flex relative flex-col justify-center items-center p-1 border border-slate-800 dark:border-slate-200 m-1 rounded"
      style={{ height: '95%', width: 'auto' }}
    >
      {children}
    </div>
  );
}

export default GuitarViewer;
