import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

function ShowOptions(props) {
  const { data, optionClick } = props;
  return (
    <>
      <Grid container>
        {data && Array.isArray(data) && data.length > 0
          ? data.map((x, i) => (
              <Grid className="p-2" md={6} item>
                <Button
                  fullWidth={true}
                  onClick={() => optionClick(x)}
                  variant="contained"
                >
                  {x}
                </Button>
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
}
export default ShowOptions;
