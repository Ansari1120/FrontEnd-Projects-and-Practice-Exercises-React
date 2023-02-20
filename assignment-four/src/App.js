import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import image from "./assets/pngwing.com.png";
import Options from "./components/options.js";
import Buttons from "./components/commonbuttons.js";
import "./app.css";
function App() {
  const questions = [
    {
      question:
        "What is the process of finding errors and fixing them within a program.",
      answer: "Debugging",
      options: ["Compiling", "Executing", "Debugging", "Scanning"],
    },
    {
      question:
        "Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop",
      answer: "Variable",
      options: ["Initialization", "Condition", "Variable", "increment"],
    },
    {
      question: "During program development, software requirements specify",
      answer: "What the task is that the program must perform",
      options: [
        "How the program will accomplish the task ",
        "What the task is that the program must perform",
        "How to divide the task into subtasks",
        "How to test the program when it is done",
      ],
    },
    {
      question: "Which command will stop an infinite loop",
      answer: "Ctrl - C",
      options: ["Alt - C", "Shift - C", "Esc", "Ctrl - C"],
    },
    {
      question: " A loop that never ends is referred to as a",
      answer: "Infinite loop",
      options: ["While loop", "Infinite loop", "Recursive loop", "for loop"],
    },
  ];
  const [Index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [Result, setResult] = useState(false);
  let [Sec, setSec] = useState(0);
  let [Minutes, setMinutes] = useState(0);
  const [status, setStatus] = useState("fail");
  const [percentage, setPercentage] = useState(0);
  const [countdown, setcountdown] = useState(59);
  const [countdownMin, setcountdownMin] = useState(2);

  let Timeout, countout;
  let initial = 5;
  let total_marks = initial * questions.length;

  //Total Score and Result update arrow function
  const checkAnswer = (UserAnswer, CorrectAnswer) => {
    if (UserAnswer === CorrectAnswer) {
      setScore(score + initial);
    }
  };
  const Next = () => {
    if (Index + 1 === questions.length) {
      setResult(true);
    }
    setIndex(Index + 1);
  };

  //Made simple Timer with minutes and seconds to update.
  useEffect(() => {
    //timer
    if (Sec <= 59) {
      Timeout = setTimeout(() => setSec(Sec + 1), 1000);
    } else {
      setSec(0);
    }
    if (Sec === 59) {
      setMinutes(Minutes + 1);
    }
    //countdown
    if (countdown >= 0) {
      countout = setTimeout(() => setcountdown(countdown - 1), 1000);
    } else {
      setcountdown(59);
    }
    if (countdown === 0) {
      setcountdownMin(countdownMin - 1);
    }
    // needs to stop the timer when all questions completed !
    if (Index === 5 || (countdown == 0 && countdownMin == 0)) {
      clearInterval(Timeout);
    }
    //precentage portion
    let perc = (score / total_marks) * 100;
    setPercentage(perc);
    //status portion
    if (percentage >= 40) {
      setStatus("pass");
    }
    if (countdown == 0 && countdownMin == 0) {
      setResult(true);
    }
  }, [Sec]);
  //restart quiz
  function Try() {
    setIndex(0);
    setScore(0);
    setResult(false);
    setMinutes(0);
    setSec(0);
    setPercentage(0);
    setStatus("fail");
    setcountdown(59);
    setcountdownMin(2);
  }
  return (
    <Box className="App">
      QUIZ-NAME : PROGRAMMING QUIZ
      <br />
      <br />
      {Result ? (
        <>
          <img className="img" src={image} alt="Logo" width={100} />
          <h1 className="stats">
            Your marks is : {score} / {total_marks}
          </h1>
          <Box className="stats">
            Time Taken : {Minutes} mins {Sec} sec
          </Box>

          <Box>
            <Buttons func={Try} info="Try Again !" />
          </Box>
          <Box>
            {percentage}
            {"%"}
          </Box>
          <Box>Status : {status}</Box>
        </>
      ) : (
        <>
          <label>
            {" "}
            Time Remaining : {"-"} {countdownMin} mins {countdown} sec
          </label>
          <br />
          <label>Marks 05</label>
          <h1>
            Question # {Index + 1} of {questions.length}
          </h1>
          <h1>{questions[Index].question}</h1>

          <br />
          <br />
          <Box>
            <Options check={checkAnswer} data={questions} ind={Index} />
          </Box>
          <Box>
            <Buttons func={Next} info="Next Question >" />
          </Box>
        </>
      )}
      {/* {wrongAnswers} */}
    </Box>
  );
}

export default App;
