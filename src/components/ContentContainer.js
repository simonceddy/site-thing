function ContentContainer({ children }) {
  return (
    <div className="px-2 pb-2 pt-4 md:mx-2 mt-1 md:mt-0 border-8 rounded border-gray-500 flex-1 w-full md:w-auto md:h-5/6 md:overflow-y-scroll whitespace-normal">
      {children}
    </div>
  );
}

export default ContentContainer;
