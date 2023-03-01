import TextField from "@mui/material/TextField";

function SMInput(props) {
  const { label, disabled, onChange } = props;
  return (
    <>
      <TextField
        color="error"
        onChange={onChange}
        disabled={disabled}
        variant="standard"
        label={label}
      />
    </>
  );
}
export default SMInput;
