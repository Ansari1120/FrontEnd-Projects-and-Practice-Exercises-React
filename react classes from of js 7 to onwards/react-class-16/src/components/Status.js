import { Box, Button } from "@mui/material";

export default function ReviewAnswer({
  ques,
  selectedOption,
  correctOption,
  onBack,
  onNext,
}) {
  return (
    <Box>
      <h2>Review Answer</h2>
      <p>{ques}</p>
      <p>Your answer: {selectedOption}</p>
      <p>Correct answer: {correctOption}</p>
      <Button variant="contained" onClick={() => onBack()}>
        Back
      </Button>
      <Button variant="contained" onClick={() => onNext()}>
        Next
      </Button>
    </Box>
  );
}
