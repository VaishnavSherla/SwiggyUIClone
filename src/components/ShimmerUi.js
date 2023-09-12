const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array(10)
        .fill()
        .map((_, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-md animate-shimmer">
            <div className="w-24 h-24 md:w-64 md:h-40 bg-gray-300 rounded-md animate-shimmer"></div>
            <div className="mt-4">
              <div className="h-4 w-36 bg-gray-300 rounded-md animate-shimmer"></div>
              <div className="h-4 w-24 mt-2 bg-gray-300 rounded-md animate-shimmer"></div>
              <div className="flex items-center mt-4">
                <div className="h-4 w-10 bg-gray-300 rounded-md animate-shimmer"></div>
                <div className="ml-2 h-4 w-24 bg-gray-300 rounded-md animate-shimmer"></div>
                <div className="ml-2 h-4 w-16 bg-gray-300 rounded-md animate-shimmer"></div>
              </div>
              <div className="h-4 w-36 mt-4 bg-gray-300 rounded-md animate-shimmer"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUi;
