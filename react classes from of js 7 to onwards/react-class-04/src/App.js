import { useState } from "react";

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
 
  const checkAnswer = (UserAnswer, CorrectAnswer) => {
    if (UserAnswer == CorrectAnswer) {
      setScore(score + 1);
    }
    if (Index + 1 == questions.length) {
      setResult(true);
    }
    setIndex(Index + 1);
  };
  return (
    <div>
      {Result ? (
        <h1>Your marks is : {score}</h1>
      ) : (
        <>
          <h1>{questions[Index].question}</h1>
          <br />
          <br />
          {questions[Index].options.map((x, i) => {
            return (
              <div key={i}>
                <button onClick={() => checkAnswer(x, questions[Index].answer)}>
                  {x}
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
