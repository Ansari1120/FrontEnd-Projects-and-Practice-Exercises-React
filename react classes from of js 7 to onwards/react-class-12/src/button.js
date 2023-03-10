import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function BTN(props) {
  console.log(props);
  return (
    // <button className="btn btn-dark px-5" onClick={props.click}>
    //   {props.btnValue}
    // </button>
    <Button startIcon={<AcUnitIcon />} color="warning" variant="contained">
      {props.btnValue}
    </Button>
  );
}

export default BTN;
