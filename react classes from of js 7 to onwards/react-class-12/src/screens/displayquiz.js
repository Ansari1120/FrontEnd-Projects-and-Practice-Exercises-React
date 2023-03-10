import { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import ShowOptions from "../components/showoption";
import { useNavigate } from "react-router-dom";

function DisplayQuiz() {
  const [quizData, setQuizData] = useState({
    quizName: "React Quiz",
    totalMarks: 60,
    perQuestionMarks: 10,
    questions: [
      {
        question: "Html Stands For _______",
        options: [
          "Hyper Text Makeup Language",
          "html",
          "Case Cading Style Sheet",
          "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
      },
      {
        question: "Css Stands For _________",
        options: [
          "Hypertext markup language",
          "Java",
          "Ram",
          "Casecading Style Sheet",
        ],
        correctAns: "Casecading Style Sheet",
      },
      {
        question: "Js Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ],
  });
  const { quizName, questions, totalMarks, perQuestionMarks } = quizData;
  const [indexNumber, setIndexNumber] = useState(0);
  const [statusConfig, setStatusConfig] = useState([
    {
      label: "Correct Answer",
      value: 0,
      color: "#2a9d8f",
    },
    {
      label: "TotalQuestion",
      value: questions.length,
      color: "#f4a261",
    },
    {
      label: "Attempted Question",
      value: 0,
      color: "#264653",
    },
  ]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  let currQue = quizData.questions[indexNumber];

  const navigation = useNavigate();

  return (
    <Box>
      {showResult ? (
        <Box>
          <Typography>Your Score is {score}</Typography>
        </Box>
      ) : (
        <Container>
          <Box className="p-3 mt-2 rounded shadow">
            <Typography variant="h3">{quizData.quizName}</Typography>
            <Box className="d-flex justify-content-between">
              <Box className="d-flex">
                <Typography className="p-2" variant="h5">
                  Total Marks : {quizData.totalMarks}
                </Typography>
                <Typography className="p-2" variant="h5">
                  Total Question : {quizData.questions.length}
                </Typography>
              </Box>
              <Box>
                <Typography className="p-2" variant="h5">
                  Current Question : {indexNumber + 1}
                </Typography>
                <Button
                  onClick={() => {
                    navigation("/addquiz");
                  }}
                  variant="contained"
                >
                  Create Quiz
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="my-3">
            <Box className="p-3 rounded shadow bg-light">
              <Typography variant="h5">{currQue.question}</Typography>
            </Box>
          </Box>
          <Box className="my-3">
            <ShowOptions
              optionClick={(e) => {
                console.log(e);
                if (currQue.correctAns == e) {
                  setScore(score + 1);
                }
                console.log(score);
                if (quizData.questions.length == indexNumber + 1) {
                  setShowResult(true);
                } else {
                  setShowResult(false);
                  setIndexNumber(indexNumber + 1);
                }
              }}
              data={currQue.options}
            />
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default DisplayQuiz;
