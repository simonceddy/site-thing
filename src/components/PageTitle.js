function PageTitle({ children }) {
  return (
    <h2 className="text-4xl font-bold font-mono border-b-2 border-slate-700 dark:border-slate-300 p-2 mb-2 w-11/12">
      {children}
    </h2>
  );
}

export default PageTitle;
