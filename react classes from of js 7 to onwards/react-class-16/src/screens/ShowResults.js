import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const ShowResults = () => {
  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Enter Roll Number"
          aria-label="Enter Roll Number"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default ShowResults;
