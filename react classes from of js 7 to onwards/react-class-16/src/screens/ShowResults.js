import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { fbGet } from "../config/firebasemethods";
import SMGrid from "../components/SMGrid";
import { Box, Grid, Typography } from "@mui/material";
const ShowResults = () => {
  const [results, setShowResults] = useState([]);
  const [searched, setSearched] = useState("");
  const [displayObj, setdisplayObj] = useState([]);
  let col = [
    {
      displayName: "Review Quiz",
      key: "",
      displayField: (e) => (
        <Button
          onClick={() => setdisplayObj([e.Questions])}
          variant="contained"
        >
          Review
        </Button>
      ),
      searchAble: true,
    },
    {
      displayName: "Roll Number",
      key: "RollNum",
      searchAble: true,
    },
    {
      displayName: "Percentage",
      key: "Percentage",
      searchAble: true,
    },
    {
      displayName: "Total_marks",
      key: "Total_marks",
      searchAble: true,
    },
    {
      displayName: "Score",
      key: "Score",
      searchAble: true,
    },
    {
      displayName: "TimeTaken (in Minutes)",
      key: "minutes",
      searchAble: true,
    },
    {
      displayName: "TimeTaken (in Seconds)",
      key: "sec",
      searchAble: true,
    },
  ];
  const getResults = () => {
    fbGet("Results")
      .then((res) => {
        setShowResults([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setSearched(e.target.value);
  };

  const handleInput = () => {
    if (searched) {
      const matchQuery = results.filter((data) =>
        data["RollNum"].includes(searched)
      );
      setShowResults(matchQuery);
    } else {
      setShowResults(results);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Enter Roll Number"
          aria-label="Enter Roll Number"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          onClick={handleInput}
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>

      {searched !== "" ? (
        <SMGrid datasource={results} columns={col} title="Results" />
      ) : (
        "Nothing Seached yet...."
      )}
    </>
  );
};

export default ShowResults;
