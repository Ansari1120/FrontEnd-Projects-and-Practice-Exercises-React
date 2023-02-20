import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  marginBottom: "10px",
  marginLeft: "30px",
  border: "1px solid",

  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: ["Roboto"].join(","),
  "&:hover": {
    backgroundColor: "#607FAF",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function Options(props) {
  const { data, ind, check } = props;
  return (
    <>
      <div className="row">
        {data[ind].options.map((x, i) => {
          return (
            <div key={i} className="col-md-5 d-flex justify-content-center">
              <BootstrapButton
                variant="contained"
                onClick={() => check(x, data[ind].answer)}
              >
                {i} {") "} {x}
              </BootstrapButton>
            </div>
          );
        })}
      </div>
    </>
  );
}
