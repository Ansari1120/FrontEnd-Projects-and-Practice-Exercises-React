import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MyButton from "./Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ScreenHeader(props) {
  const { title, buttonsList } = props;
  const navigate = useNavigate();

  return (
    <>
      <Box className="p-2 mb-4 bg-white rounded shadow d-flex justify-content-between align-items-center">
        <Box>
          <MyButton
            onClick={() => {
              navigate(-1);
            }}
            startIcon={<ArrowBackIcon />}
          />
          <MyButton
            onClick={() => {
              navigate(+1);
            }}
            startIcon={<ArrowForwardIcon />}
          />
        </Box>
        <Typography variant="h4" className="d-flex float-end">
          {title}
        </Typography>
        <Box>
          {buttonsList && Array.isArray(buttonsList) && buttonsList.length > 0
            ? buttonsList.map((x, i) => (
                <Tooltip key={i} title={x.tooltip}>
                  {x.displayField}
                </Tooltip>
              ))
            : null}
        </Box>
      </Box>
    </>
  );
}
export default ScreenHeader;
