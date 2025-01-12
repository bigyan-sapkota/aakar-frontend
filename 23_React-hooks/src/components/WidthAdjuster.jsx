import React, { useEffect, useState } from "react";

const WidthAdjuster = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // resize handler
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center text-4xl mt-8">
      Your window size is {width}
    </div>
  );
};

export default WidthAdjuster;
