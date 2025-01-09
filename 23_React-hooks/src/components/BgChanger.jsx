import React, { useEffect, useState } from "react";

const BgChanger = () => {
  const [count, setCount] = useState(1);
  const [isCountEven, setIsCountEven] = useState(false);

  useEffect(() => {
    // if (count / 2 === 0) {
    //   setIsCountEven(true);
    // } else {
    //   setIsCountEven(false);
    // }
    const isCountEvenValue = count % 2 === 0 ? true : false;
    setIsCountEven(isCountEvenValue);
  }, [count]);

  const buttonClickHandler = () => {
    // count ko value increase garxam
    // count even xa vane isCountEven is set to true
    // count odd xa vane isCountEven is set to false

    const updateCount = count + 1;
    setCount(updateCount);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <p
        className={`${
          isCountEven ? "bg-green-600" : "bg-blue-600"
        } p-2 text-white text-center w-full`}
      >
        You clicked {count} times
      </p>
      <button
        className="px-4 py-0.5 rounded-sm border border-purple-600 bg-purple-600 text-white mt-2 hover:bg-white hover:text-purple-600 hover:border hover:border-purple-600 w-fit"
        onClick={buttonClickHandler}
      >
        Increase Count
      </button>
    </div>
  );
};

export default BgChanger;
