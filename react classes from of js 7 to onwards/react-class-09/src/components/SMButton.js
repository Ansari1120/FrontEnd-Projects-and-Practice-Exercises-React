import Button from "@mui/material/Button";

function SMButton(props) {
  const { label, onClick, disabled, startIcon, endIcon } = props;
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        onClick={onClick}
        variant="contained"
      >
        {label}
      </Button>
    </>
  );
}
export default SMButton;
