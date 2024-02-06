import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { fbGet } from "../config/firebasemethods";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

const ShowResults = () => {
  const [results, setShowResults] = useState([]);
  const [searched, setSearched] = useState("");
  const [Filtered, setFiltered] = useState([]);
  const [check, setCheck] = useState(false);

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
      setFiltered([...matchQuery]);
      console.log("results", Filtered);
      setCheck(true);
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

      {check ? (
        <>
          {Filtered.map((x, i) => {
            return (
              <div
                style={{ margin: "25%" }}
                key={i}
                className="mdc-card__actions"
              >
                <Card sx={{ maxWidth: 600 }}>
                  <CardContent>
                    <Typography
                      variant="h3"
                      gutterBottom
                      class="mdc-button__ripple"
                    >
                      Roll Number : {x.RollNum}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      class="mdc-button__label"
                    >
                      Percentage : {x.Percentage}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      class="mdc-button__label"
                    >
                      Total Marks : {x.Total_marks}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      class="mdc-button__label"
                    >
                      Score : {x.Score}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      class="mdc-button__label"
                    >
                      Time Taken (in Minutes) : {x.minutes}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      class="mdc-button__label"
                    >
                      Time Taken (in Seconds) : {x.sec}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      class="mdc-button__label"
                    >
                      Status : {x.Status}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View More Info</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </>
      ) : (
        "Nothing Seached yet...."
      )}
    </>
  );
};

export default ShowResults;
