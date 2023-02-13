import { useState, useEffect } from "react";
import "./App.css";
import image from "./pngwing.com.png";
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

  let Timeout;
  //Total Score and Result update arrow function
  const checkAnswer = (UserAnswer, CorrectAnswer) => {
    if (UserAnswer === CorrectAnswer) {
      setScore(score + 1);
    }
    if (Index + 1 === questions.length) {
      setResult(true);
    }
    setIndex(Index + 1);
  };

  //Made simple Timer with minutes and seconds to update.
  useEffect(() => {
    if (Sec <= 59) {
      Timeout = setTimeout(() => setSec(Sec + 1), 1000);
    } else {
      setSec(0);
    }
    if (Sec === 59) {
      setMinutes(Minutes + 1);
    }
    // needs to stop the timer when all questions completed !
    if (Index === 5) {
      clearInterval(Timeout);
    }
  }, [Sec]);
  function Try() {
    setIndex(0);
    setScore(0);
    setResult(false);
    setMinutes(0);
    setSec(0);
  }
  return (
    <div className="App">
      {Result ? (
        <>
          <img className="img" src={image} alt="Logo" width={100} />
          <h1 className="stats">
            Your marks is : {score} / {questions.length}
          </h1>
          <div className="stats">
            Time Taken : {Minutes} mins {Sec} sec
          </div>
          <div>
            <button className="button" onClick={Try}>
              Try Again
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="stats">
            QUESTION # {Index + 1} of {questions.length}
          </h1>
          <label>
            {" "}
            Timer :{Minutes} {Sec}
          </label>
          <h1>{questions[Index].question}</h1>
          <br />
          <br />
          {questions[Index].options.map((x, i) => {
            return (
              <div key={i}>
                <button
                  className="button"
                  onClick={() => checkAnswer(x, questions[Index].answer)}
                >
                  {i} {") "} {x}
                </button>
              </div>
            );
          })}
        </>
      )}
      {wrongAnswers}
    </div>
  );
}

export default App;
