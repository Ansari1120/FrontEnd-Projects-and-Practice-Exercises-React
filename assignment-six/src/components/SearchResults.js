  import { Box, TextField, MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";
const SearchResults = ({ columns, commentsData, setfilterResults }) => {
  let searchList = columns.filter((x) => x.searchAble);

  const [keySelect, Setkeyselect] = useState("");

  const handleChange = (event) => {
    Setkeyselect(event.target.value);
    console.log(keySelect);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const handleInput = (e) => {
    if (e.target.value) {
      const matchQuery = commentsData.filter((comment) =>
        comment[keySelect].toLowerCase().toString().includes(e.target.value)
      );
      setfilterResults(matchQuery);
    } else {
      setfilterResults(commentsData);
    }
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Box marginTop={"30px"} sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <TextField
              required
              id="outlined-required"
              label={keySelect}
              placeholder="Search here .."
              onChange={handleInput}
            />
          </Box>
          <Box>
            <Select
              id="filled-select-type"
              select
              label="Select"
              defaultValue="email"
              helperText="Please select  "
              variant="filled"
              onChange={handleChange}
            >
              {searchList.map((option) => (
                <MenuItem key={option.key} value={option.key}>
                  {option.displayName}
                </MenuItem>
              ))}
            </Select>
          </Box>
         
        </Box>
      </FormControl>
    </>
  );
};

export default SearchResults;
