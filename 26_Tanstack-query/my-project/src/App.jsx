import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incButtonClickHandler = () => {
    // increase garda, 10 vao vane nabadaune
    if (count === 10) {
      return;
    }
    const updatedCount = count + 1;
    setCount(updatedCount);
  };

  const decButtonClickHandler = () => {
    if (count === 0) {
      return;
    }
    const updatedCount = count - 1;
    setCount(updatedCount);
  };

  const resetButtonClickHandler = () => {
    setCount(0);
  };

  // count ko value suru ma 0 hunxa
  // 3 ota button rakhxu : Inc, dec, reset
  // the value of count is limited from 0 to 10

  return (
    <div>
      {/* cards */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <AakarComponent
          heading="Graphics Design"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam dicta id,
        consequatur delectus soluta dolorem fugiat et aut dolore modi."
        />
        <AakarComponent
          heading="Digital Marketing"
          description="Hami aakar ma babal graphics padauxam"
        />
      </div>

      <h2>Your Name is {name}</h2>

      <div
        style={{
          height: "40vh",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          padding: "1rem",
        }}
      >
        <h1>Your Count is : {count}</h1>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <button
            onClick={decButtonClickHandler}
            className="btn"
            style={{
              backgroundColor: "red",
            }}
          >
            Dec
          </button>
          <button
            onClick={incButtonClickHandler}
            className="btn"
            style={{
              backgroundColor: "blue",
            }}
          >
            Inc
          </button>
          <button
            onClick={resetButtonClickHandler}
            className="btn"
            style={{
              color: "black",
              backgroundColor: "white",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

// Component is a function which return HTML element
// For creating an component with export default you can use command rafce (if you have installed es7+)
// export default garda chei without curly brackets import hunxa
// export garda chei with curly bracket destructuring gardei import garinxa mostly

// We are passing two things in props: heading, description
function AakarComponent({ heading, description }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "1rem",
        padding: "1.5rem",
        width: "50%",
      }}
    >
      <h2
        style={{
          textTransform: "uppercase",
        }}
      >
        {heading}
      </h2>
      <p>{description}</p>
    </div>
  );
}

// If you didn't destructure the props
// function AakarComponent(props) {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         borderRadius: "1rem",
//         padding: "1.5rem",
//       }}
//     >
//       <h2>{props.heading}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// }
