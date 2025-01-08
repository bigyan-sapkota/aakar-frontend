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

export default SpanAndButton;
