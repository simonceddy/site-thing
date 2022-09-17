function StaticCircle({
  children,
  diameter,
  width = '20px',
  height = '20px',
  style = {},
  className
}) {
  return (
    <div
      className={`rounded-full border-2 border-zinc-500 p-2 static-circle ${className}`}
      style={{
        ...style,
        width: diameter || width,
        height: diameter || height,
      }}
    >
      {children}
    </div>
  );
}

export default StaticCircle;
