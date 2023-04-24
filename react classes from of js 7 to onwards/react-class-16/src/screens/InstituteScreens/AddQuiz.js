import { Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MySnackBarMessage from "../../components/ShowMessage";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input";
import SmModal from "../../components/SmModal";
import { useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import { fbDelete, fbGet, fbPost } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import MyIconbutton from "../../components/Iconbutton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function AddQuiz() {
  const [questions, setQuestions] = useState([
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
  ]);

  const col = [
    {
      key: "question",
      displayName: "Question",
      searchAble: true,
    },
    {
      key: "options",
      displayName: "Options",
      searchAble: true,
    },
    {
      key: "answer",
      displayName: "Answer",
      searchAble: true,
    },
    {
      displayName: "Edit Question",
      key: "",
      displayField: (e) => (
        <MyIconbutton
          val={<EditIcon />}
          onClick={() => {
            openEdit(e);
            setOpen(true);
          }}
        />
      ),
      searchAble: true,
    },
    {
      displayName: "Delete Question",
      key: "",
      displayField: (e) => (
        <MyIconbutton
          val={<DeleteIcon />}
          onClick={() => {
            DeleteItem(e);
          }}
        />
      ),
      searchAble: true,
    },
  ];

  const [open, setOpen] = useState(false);
  const [msgopen, setmsgOpen] = useState(false);
  const [loader, setloader] = useState(false);
  const [edit, setEdit] = useState(false);
  const [condition, setCondition] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: 0,
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setmsgOpen(false);
  };

  const saveFeed = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({
      question: "",
      options: ["", "", "", ""],
      answer: "",
    });
    if (
      newQuestion.question === "" &&
      newQuestion.options === "" &&
      newQuestion.answer === ""
    ) {
      console.log("dont add null data !");
    } else {
      fbPost("QuizQuestions", newQuestion)
        .then(() => {
          console.log("data sent Sucessfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getFeed = () => {
    fbGet("QuizQuestions")
      .then((res) => {
        setQuestions([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let DeleteItem = (obj) => {
    console.log(obj);
    fbDelete("QuizQuestions", obj.id)
      .then(() => {
        console.log("data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let openEdit = (obj) => {
    setEdit(true);
    setNewQuestion({
      question: obj.question,
      options: [obj.options[0], obj.options[1], obj.options[2], obj.options[3]],
      answer: obj.answer,
      id: obj.id,
    });
  };

  const editFeedData = () => {
    if (
      newQuestion.question === "" &&
      newQuestion.options === "" &&
      newQuestion.answer === ""
    ) {
      console.log("dont update null data");
    } else {
      fbPost("QuizQuestions", newQuestion, newQuestion.id)
        .then(() => {
          console.log("Data Updated SuccessFully !");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setNewQuestion({
      question: "",
      options: ["", "", "", ""],
      answer: "",
    });
  };
  const handleQuestionChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      question: event.target.value,
    });
  };
  const handleAnswerChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      answer: event.target.value,
    });
  };

  const handleOptionChange = (event, index) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = event.target.value;

    setNewQuestion({
      ...newQuestion,
      options: updatedOptions,
    });
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log(questions);

  return (
    <>
      <>
        <SmModal
          Title="Quiz Questions Form"
          innerContent={
            <Box>
              <Grid container>
                <Grid className="p-2" item md={6}>
                  <MyInput
                    value={newQuestion.question}
                    onChange={(e) => handleQuestionChange(e)}
                    label="Question"
                    variant="outlined"
                  />
                </Grid>
                <Grid className="p-2" item md={6} marginTop="10px">
                  {newQuestion.options.map((option, index) => (
                    <div key={index}>
                      <MyInput
                        type="text"
                        value={questions.option}
                        onChange={(event) => handleOptionChange(event, index)}
                        label={`Option ${index + 1}`}
                      />
                    </div>
                  ))}
                </Grid>

                <Grid className="p-2" item md={6} marginTop="10px">
                  <MyInput
                    value={newQuestion.answer}
                    onChange={(e) => handleAnswerChange(e)}
                    label="Answer"
                    type={"text"}
                  />
                </Grid>
              </Grid>
            </Box>
          }
          modalFooter={
            <Box align="right">
              <MyButton
                label="Save"
                variant="contained"
                onClick={edit ? () => editFeedData() : () => saveFeed()}
                loadingPosition="start"
                loading={loader}
                startIcon={<SaveIcon />}
              />
            </Box>
          }
          open={open}
          //close is working in child to parent context
          close={(e) => setOpen(e)}
        />
        <Box>
          <MyButton
            label="Add new Quiz Questions"
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          />
        </Box>

        <Box>
          <MySnackBarMessage
            variant="outlined"
            open={msgopen}
            severity={condition}
            onClose={handleClose}
            label={"res"}
          />
          <Box>
            <SMGrid
              datasource={questions}
              columns={col}
              title="Questions List"
            />
          </Box>
        </Box>
      </>
    </>
  );
}
