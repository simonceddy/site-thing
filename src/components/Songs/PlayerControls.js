function PlayerControls({ children }) {
  return (
    <div className="border-2 border-gray-400 flex flex-row justify-around items-center p-2 rounded-md">
      {children}
    </div>
  );
}

export default PlayerControls;
