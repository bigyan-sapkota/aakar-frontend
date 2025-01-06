const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Hi</h2>
      <SpanAndButton number="2" message="Hari" />
      <SpanAndButton number="1" message="Vs code" />
      <SpanAndButton number="3" />
    </div>
  );
};

const SpanAndButton = (props) => {
  return (
    <div>
      <span>{props.message}</span>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "0.5rem",
        }}
      >
        Button {props.number}
      </button>
    </div>
  );
};

export default App;
// Component are functions which can be used as tag.
