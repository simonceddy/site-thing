function ContentContainer({ children }) {
  return (
    <div className="px-2 pb-2 pt-4 mt-1 border-8 rounded border-gray-500 content-container whitespace-normal overflow-y-auto">
      {children}
    </div>
  );
}

export default ContentContainer;
