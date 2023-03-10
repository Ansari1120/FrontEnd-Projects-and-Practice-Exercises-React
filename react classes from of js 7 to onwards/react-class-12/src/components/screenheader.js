import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";

function ScreenHeader(props) {
  const { title, buttonsList } = props;
  return (
    <>
      <Box className="p-2 mb-2 bg-white rounded shadow d-flex justify-content-between align-items-center">
        <Typography variant="h4">{title}</Typography>
        <Box>
          {Array.isArray(buttonsList) && buttonsList.length > 0
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
