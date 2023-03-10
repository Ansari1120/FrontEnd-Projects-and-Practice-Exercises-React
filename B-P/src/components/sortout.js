import { useState } from "react";
import { Box, TextField, MenuItem, Select, FormControl } from "@mui/material";

const Sortout = (props) => {
  const [keySelect, Setkeyselect] = useState("");
  const SortIt = [
    {
      id: 1,
      Name: "A-To-Z",
      Status: true,
    },
    {
      id: 2,
      Name: "Z-To-A",
      Status: false,
    },
  ];
  const { datasource, setDatasource } = props;

  const Sorting = (event) => {
    let result;
    Setkeyselect(event.target.value);
    console.log(keySelect);
    if (!keySelect) {
      result = datasource.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result = datasource.sort((a, b) => b.name.localeCompare(a.name));
    }
    setDatasource([...result]);
  };

  return (
    <>
      {" "}
      <Box>
        <Select
          id="filled-select-type"
          select
          label="Select"
          helperText="Please select"
          variant="filled"
          onChange={Sorting}
        >
          {SortIt.map((option) => (
            <MenuItem key={option.id} value={option.Status}>
              {option.Name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default Sortout;