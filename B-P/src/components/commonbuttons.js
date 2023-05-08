import Button from "@mui/material/Button";

export default function Buttons({ func, info }) {
  return (
    <Button
      className="bg-info bg-gradient mt-5"
      variant="contained"
      onClick={() => func()}
    >
      {info}
    </Button>
  );
}
