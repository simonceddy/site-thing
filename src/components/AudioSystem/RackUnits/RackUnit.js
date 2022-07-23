function RackUnit({ children, className }) {
  return (
    <div className={`flex flex-row justify-between items-center w-11/12 border-2 border-blue-400 rounded my-1 ${className}`}>
      <div className="border-r border-blue-400 w-4 h-full" />
      <div className="flex-1 h-full">
        {children}
      </div>
      <div className="border-l border-blue-400 w-4 h-full" />
    </div>
  );
}

export default RackUnit;
