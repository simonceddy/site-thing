function CircleButton({
  children,
  onClick,
  diameter,
  width = '20px',
  height = '20px',
  style = {},
  className
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 border-zinc-500 p-2 ${className}`}
      style={{
        ...style,
        width: width || diameter,
        height: height || diameter,
      }}
    >
      {children}
    </button>
  );
}

export default CircleButton;
