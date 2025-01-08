import SpanAndButton from "./components/SpanAndButton";
import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count === 10) {
      alert("Count can't be greater than 10");
      return;
    }
    const updatedCount = count + 1;
    setCount(updatedCount);
  };

  const decreaseCount = () => {
    if (count === 0) {
      alert("Count can't be less than 0");
      return;
    }
    const updatedCount = count - 1;
    setCount(updatedCount);
  };

  return (
    <div id="app">
      {/* <h1>Hello</h1>
      <h2>Hi</h2>
      <SpanAndButton number="2" message="Hari" />
      <SpanAndButton number="1" message="Vs code" />
      <SpanAndButton number="3" /> */}

      <CountDisplay num={count} message="Count is : " />

      <button onClick={decreaseCount} className="btn dcr-btn">
        Decrease
      </button>

      <button onClick={increaseCount} className="btn incr-btn">
        Increase
      </button>
    </div>
  );
};

export default App;
// Component are functions which can be used as tag.
