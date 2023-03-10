function Input(props) {
  return (
    <input
      style={{
        backgroundColor: "white",
        border: "1px solid grey",
        borderRadius: "5px",
        padding: 5,
        margin: 3,
        boxShadow: "0px 8px 12px rgba(0,0,0,.2)",
      }}
      placeholder={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
export default Input;
