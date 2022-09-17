function AppContainer({ children }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-1 dark:bg-gray-800 dark:text-cyan-300 bg-gray-200 text-cyan-900">
      {children}
    </div>
  );
}

export default AppContainer;
