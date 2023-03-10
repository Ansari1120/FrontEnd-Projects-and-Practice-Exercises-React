import { TextField } from "@mui/material";

function Textarea(props) {
  const { label } = props;
  return <TextField multiline={true} rows={4} label={label} />;
}
export default Textarea;
