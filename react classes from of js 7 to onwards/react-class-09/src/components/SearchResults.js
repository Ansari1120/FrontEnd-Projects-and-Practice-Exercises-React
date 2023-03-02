import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState } from "react";
const SearchResults = ({ columns, commentsData, setfilterResults }) => {
  const [keySelect, Setkeyselect] = useState("");

  const handleChange = (event) => {
    Setkeyselect(event.target.value);
    console.log(keySelect);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const handleInput = (e) => {
    let matchQuery;
    if (e.target.value && keySelect === "name") {
      matchQuery = commentsData.filter((comment) =>
        comment.name.toLowerCase().includes(e.target.value)
      );
      setfilterResults(matchQuery);
    } else if (e.target.value && keySelect === "email") {
      matchQuery = commentsData.filter((comment) =>
        comment.email.toLowerCase().includes(e.target.value)
      );
      setfilterResults(matchQuery);
    } else {
      setfilterResults(commentsData);
    }
  };

  return (
    <>
      <Box>
        <FormControl onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label={keySelect}
            placeholder="Search here .."
            // value={.........}
            onChange={handleInput}
            // value={query}
          />

          <InputLabel htmlFor="demo-customized-textbox">
            Select Search Type
          </InputLabel>
          <Select
            id="filled-select-type"
            select
            label="Select"
            defaultValue="email"
            helperText="Please select  "
            variant="filled"
            onChange={handleChange}
          >
            {columns.map((option) => (
              <MenuItem key={option.key} value={option.key}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SearchResults;
