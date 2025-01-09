import { useEffect, useState } from "react";

const App = () => {
  // useEffect(function, [dependencyArray]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);

  const increaseCount = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <p className="bg-green-500 p-2 text-white text-center w-full">
        You clicked {count} times
      </p>
      <button
        onClick={increaseCount}
        className="px-4 py-0.5 rounded-sm border border-purple-600 bg-purple-600 text-white mt-2 hover:bg-white hover:text-purple-600 hover:border hover:border-purple-600 w-fit"
      >
        Inc
      </button>
    </div>
  );
};

export default App;

// use Effect hook
