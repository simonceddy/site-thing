function TabContainer({ children }) {
  return (
    <div
      className="p-1 m-1 border border-slate-800 dark:border-slate-200 rounded flex-1"
      style={{ width: '90%' }}
    >
      {children}
    </div>
  );
}

export default TabContainer;
