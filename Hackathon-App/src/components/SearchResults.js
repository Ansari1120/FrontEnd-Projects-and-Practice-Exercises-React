import { Box, TextField, MenuItem, Select, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
const SearchResults = ({ columns, CarsList, setCarsFiltered }) => {
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
      const matchQuery = CarsList.filter((comment) =>
        comment.car.toLowerCase().includes(e.target.value)
      );
      setCarsFiltered(matchQuery);
    } else {
      setCarsFiltered(CarsList);
    }
  };

  useEffect(() => {
    setCarsFiltered(CarsList);
  }, []);
  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Box marginTop={"30px"} sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <TextField
              required
              id="outlined-required"
              label={"Car"}
              placeholder="Search here .."
              onChange={handleInput}
            />
          </Box>
        </Box>
      </FormControl>
    </>
  );
};

export default SearchResults;
